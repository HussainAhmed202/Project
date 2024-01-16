# Create your views here.
from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Project, User , Ranking ,Question , TableSubmission
from .serializers import ProjectSerializer, UserSerializer,RankingSerializer,TableSubmissionSerializer,QuestionSerializer


class GetUser(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()


class ProjectView(viewsets.ModelViewSet):
    serializer_class = ProjectSerializer
    queryset = Project.objects.all()

class RankingView(viewsets.ModelViewSet):
    serializer_class = RankingSerializer
    queryset = Ranking.objects.all()

class TableSubmissionView(viewsets.ModelViewSet):
    serializer_class = TableSubmissionSerializer
    queryset = TableSubmission.objects.all()

class QuestionView(viewsets.ModelViewSet):
    serializer_class = QuestionSerializer
    queryset = Question.objects.all()
