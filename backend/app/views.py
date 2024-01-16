import json
import os
import subprocess

from django.contrib.auth import authenticate
from django.contrib.auth.hashers import make_password
from django.http import HttpResponse, JsonResponse
from django.middleware.csrf import get_token
from django.shortcuts import get_object_or_404, render
from django.utils.decorators import method_decorator
from django.views import View
from django.views.decorators.csrf import csrf_exempt, csrf_protect, ensure_csrf_cookie
from rest_framework import status, viewsets
from rest_framework.authentication import SessionAuthentication, TokenAuthentication
from rest_framework.authtoken.models import Token
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Project, User
from .serializers import (
    LoginSerializer,
    ProjectSerializer,
    QuestionSerializer,
    SignUpSerializer,
    UserSerializer,
)


class LoginView(APIView):
    def post(self, request, *args, **kwargs):
        serializer = LoginSerializer(data=request.data)

        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        username = serializer.validated_data["Email"]
        password = serializer.validated_data["Password"]
        # hashed_password = make_password(password)
        #  if User.objects.filter(Email=username, Password=hashed_password).exists():
        if User.objects.filter(
            Email=username,
        ).exists():
            # valid user
            return Response(
                {"Email": username, "Password": password, "token": "xyz123"},
                status=status.HTTP_200_OK,
            )
        return JsonResponse(
            {"Error": "Invalid username or password"},
            status=status.HTTP_400_BAD_REQUEST,
        )


# @method_decorator(csrf_protect, name="dispatch")
class SignUpView(APIView):
    def post(self, request, *args, **kwargs):
        # data = {'FirstName': 'pop', 'LastName': 'lop', 'Email': 'poplop@mail.com', 'Password': 'sdfsdfs'}
        serializer = SignUpSerializer(data=request.data)
        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        username = serializer.validated_data["Email"]
        password = serializer.validated_data["Password"]
        firstname = serializer.validated_data["FirstName"]
        lastname = serializer.validated_data["LastName"]

        # Check if the user already exists
        if User.objects.filter(Email=username).exists():
            return JsonResponse(
                {"Error": "User with this email already exists"},
                status=status.HTTP_400_BAD_REQUEST,
            )
        else:
            hashed_password = make_password(password)
            user = User.objects.create(
                Email=username,
                Password=hashed_password,
                FirstName=firstname,
                LastName=lastname,
            )
            user.save()

            my_user = User.objects.get(Email=username)
            print(my_user)

            # token, created = Token.objects.get_or_create(user=my_user)
            # if created:
            #     print("Token created")
            return Response(
                {
                    "status": "user registered",
                    "username": username,
                    "token": "xyz123",
                    "password": password,
                    "firstname": firstname,
                    "lastname": lastname,
                }
            )


# @method_decorator(ensure_csrf_cookie, name="dispatch")
# class GetCSRFToken(APIView):
#     # provides csrf token to client when get request

#     def get(self, request, *args, **kwargs):
#         csrf_token = get_token(request)
#         return JsonResponse({"csrfToken": csrf_token})


class AllProjectView(APIView):
    def post(self, request):
        print(request.data)

        # Retrieve the user instance based on the username
        user_instance = get_object_or_404(User, Email=request.data["username"])

        # Access the user's primary key (id)
        user_id = user_instance.id

        projects = Project.objects.filter(
            OwnerId=user_id, IsTrash=False, IsArchived=False
        )
        serializer = ProjectSerializer(projects, many=True)
        return Response(serializer.data)


class TrashProjectView(APIView):
    def post(self, request):
        print(request.data)

        # Retrieve the user instance based on the username
        user_instance = get_object_or_404(User, Email=request.data["username"])

        # Access the user's primary key (id)
        user_id = user_instance.id

        projects = Project.objects.filter(
            OwnerId=user_id, IsTrash=True, IsArchived=False
        )
        serializer = ProjectSerializer(projects, many=True)
        return Response(serializer.data)


class ArchiveProjectView(APIView):
    def post(self, request):
        print(request.data)

        # Retrieve the user instance based on the username
        user_instance = get_object_or_404(User, Email=request.data["username"])

        # Access the user's primary key (id)
        user_id = user_instance.id

        projects = Project.objects.filter(
            OwnerId=user_id, IsTrash=False, IsArchived=True
        )
        serializer = ProjectSerializer(projects, many=True)
        return Response(serializer.data)


class QuestionView(APIView):
    def get(self, request, *args, **kwargs):
        serializer = QuestionSerializer(request.data)
        return HttpResponse(serializer)


class ExecutionView(APIView):
    def post(self, request):
        req = json.dumps(request)
        os.chdir(os.path.dirname(os.getcwd()))
        if request["language"] == "Python":
            p1 = subprocess.run(
                ["node", "executePython.js", request], capture_output=True, text=True
            )

        elif request["language"] == "CPP":
            p1 = subprocess.run(
                ["node", "executeCPP.js", request], capture_output=True, text=True
            )

        elif request["language"] == "Java":
            p1 = subprocess.run(
                ["node", "executeJava.js", request], capture_output=True, text=True
            )
        print(p1)
        return HttpResponse(p1)


class UpdateArchive(APIView):
    def post(self, request, project_id):
        try:
            project = Project.objects.get(id=project_id)
            project.IsArchived = not project.IsArchived  # Toggle IsArchived field
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
            project.IsTrash = not project.IsTrash  # Toggle IsTrash field
            project.save()
            serializer = ProjectSerializer(project)
            return Response(serializer.data)
        except Project.DoesNotExist:
            return Response(
                {"error": "Project not found"}, status=status.HTTP_404_NOT_FOUND
            )


class ProjectDetailView(APIView):
    def get(self, request, project_id):
        project = get_object_or_404(Project, id=project_id)
        serializer = ProjectSerializer(project)
        print(serializer.data)
        # return JsonResponse(serializer.data)
        return Response(serializer.data)
