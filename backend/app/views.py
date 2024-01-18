import json
import os
import subprocess

from django.contrib.auth.hashers import make_password
from django.http import HttpResponse, JsonResponse
from django.shortcuts import get_object_or_404
from django.utils import timezone
from rest_framework import status, viewsets
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Challenge, Project, Ranking, TableSubmission, User
from .serializers import (
    LoginSerializer,
    ProjectSerializer,
    QuestionSerializer,
    RankingSerializer,
    SignUpSerializer,
    TableSubmissionSerializer,
)


class LoginView(APIView):
    def post(self, request, *args, **kwargs):
        serializer = LoginSerializer(data=request.data)

        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        username = serializer.validated_data["email"]
        password = serializer.validated_data["password"]
        # hashed_password = make_password(password)
        #  if User.objects.filter(Email=username, Password=hashed_password).exists():
        if User.objects.filter(
            email=username,
        ).exists():
            # valid user
            return Response(
                {"email": username, "password": password, "token": "xyz123"},
                status=status.HTTP_200_OK,
            )
        return JsonResponse(
            {"Error": "Invalid username or password"},
            status=status.HTTP_400_BAD_REQUEST,
        )


class RankingView(viewsets.ModelViewSet):
    serializer_class = RankingSerializer
    queryset = Ranking.objects.all()


class TableSubmissionView(viewsets.ModelViewSet):
    serializer_class = TableSubmissionSerializer
    queryset = TableSubmission.objects.all()


class SignUpView(APIView):
    def post(self, request, *args, **kwargs):
        # data = {'FirstName': 'pop', 'LastName': 'lop', 'Email': 'poplop@mail.com', 'Password': 'sdfsdfs'}
        serializer = SignUpSerializer(data=request.data)
        print(request.data)
        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        username = serializer.validated_data["email"]
        password = serializer.validated_data["password"]
        firstname = serializer.validated_data["firstName"]
        lastname = serializer.validated_data["lastName"]

        # Check if the user already exists
        if User.objects.filter(email=username).exists():
            return JsonResponse(
                {"Error": "User with this email already exists"},
                status=status.HTTP_400_BAD_REQUEST,
            )
        else:
            hashed_password = make_password(password)
            user = User.objects.create(
                email=username,
                password=hashed_password,
                firstName=firstname,
                lastName=lastname,
            )
            user.save()

            my_user = User.objects.get(email=username)
            print(my_user)

            # token, created = Token.objects.get_or_create(user=my_user)
            # if created:
            #     print("Token created")
            return Response(
                {
                    "status": "user registered",
                    "email": username,
                    "token": "xyz123",
                    "password": password,
                    "firstname": firstname,
                    "lastname": lastname,
                }
            )


class AllProjectView(APIView):
    def post(self, request):
        print(request.data)

        # Retrieve the user instance based on the username
        user_instance = get_object_or_404(User, email=request.data["username"])

        # Access the user's primary key (id)
        user_id = user_instance.id

        projects = Project.objects.filter(
            ownerId=user_id, isTrash=False, isArchived=False
        )
        serializer = ProjectSerializer(projects, many=True)
        return Response(serializer.data)


class TrashProjectView(APIView):
    def post(self, request):
        print(request.data)

        # Retrieve the user instance based on the username
        user_instance = get_object_or_404(User, email=request.data["username"])

        # Access the user's primary key (id)
        user_id = user_instance.id

        projects = Project.objects.filter(
            ownerId=user_id, isTrash=True, isArchived=False
        )
        serializer = ProjectSerializer(projects, many=True)
        return Response(serializer.data)


class ArchiveProjectView(APIView):
    def post(self, request):
        print(request.data)

        # Retrieve the user instance based on the username
        user_instance = get_object_or_404(User, email=request.data["username"])

        # Access the user's primary key (id)
        user_id = user_instance.id

        projects = Project.objects.filter(
            ownerId=user_id, isTrash=False, isArchived=True
        )
        serializer = ProjectSerializer(projects, many=True)
        return Response(serializer.data)


class QuestionView(APIView):
    def get(self, request):
        # Retrieve data from the database
        data = Challenge.objects.all()
        serializer = QuestionSerializer(data, many=True)
        print(serializer.data)

        # Convert data to JSON and send as a response
        return JsonResponse(serializer.data, safe=False)


class ExecutionView(APIView):
    def post(self, request):
        lang = request.data["language"]
        lang_to_exefile_mapping = {
            "python": "executePython.js",
            "java": "executeJava.js",
            "cpp": "executeCPP.js",
            "c": "executeC.js",
        }
        file_to_execute = lang_to_exefile_mapping[lang]
        req = json.dumps(request.data)
        # print(req)

        # EXG:  node executePython.js {"language": "Python","code": 'user_input = input("Enter something: ")\nprint("You entered:", user_input)',"input": "Hello in python",}
        p1 = subprocess.run(
            ["node", file_to_execute, req], capture_output=True, text=True
        )
        if p1.returncode == 0:
            output = p1.stdout
            return Response({"success": True, "output": output})
        else:
            error_message = p1.stderr
            return Response(
                {"success": False, "error": error_message},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )


class UpdateArchive(APIView):
    def post(self, request, project_id):
        try:
            project = Project.objects.get(id=project_id)
            project.isTrash = False
            project.isArchived = not project.isArchived  # Toggle isArchived field
            project.save()
            serializer = ProjectSerializer(project)
            return Response(serializer.data)
        except Project.DoesNotExist:
            return Response(
                {"error": "Project not found"}, status=status.HTTP_404_NOT_FOUND
            )


class UpdateTrash(APIView):
    def post(self, request, project_id):
        try:
            project = Project.objects.get(id=project_id)
            project.isArchived = False
            project.isTrash = not project.isTrash  # Toggle isTrash field
            project.save()
            serializer = ProjectSerializer(project)
            return Response(serializer.data)
        except Project.DoesNotExist:
            return Response(
                {"error": "Project not found"}, status=status.HTTP_404_NOT_FOUND
            )


class RegisterProjectView(APIView):
    def post(self, request):
        proj_name = request.data.get("projName")
        project_content = request.data.get("projectContent")

        # Retrieve the user instance based on the username
        user_instance = get_object_or_404(User, email=request.data.get("username"))

        # Access the user's primary key (id)
        user_id = user_instance.id

        # Get the user object based on the provided ID
        owner = User.objects.get(pk=user_id)

        # Create a new Project instance
        new_project = Project(
            projName=proj_name,
            dateModified=timezone.now().date(),
            projectContent=project_content,
            isTrash=False,
            isArchived=False,
            ownerId=owner,
        )

        # Save the new project to the database
        new_project.save()

        serializer = ProjectSerializer(new_project)
        return Response(serializer.data)


class UpdateProjectView(APIView):
    def put(self, request, project_id):
        project = get_object_or_404(Project, id=project_id)
        new_content = request.data.get("projectContent")

        # Update the projectContent field
        project.projectContent = new_content

        # Save the changes
        project.save()

        serializer = ProjectSerializer(project)
        return Response(serializer.data, status=status.HTTP_200_OK)


class ProjectDetailView(APIView):
    def get(self, request, project_id):
        project = get_object_or_404(Project, id=project_id)
        serializer = ProjectSerializer(project)
        print(serializer.data)
        # return JsonResponse(serializer.data)
        return Response(serializer.data)


class QuestionDetailView(APIView):
    def get(self, request, question_id):
        question = get_object_or_404(Challenge, id=question_id)
        serializer = QuestionSerializer(question)
        print(serializer.data)
        # return JsonResponse(serializer.data)
        return Response(serializer.data)
