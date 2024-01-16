from rest_framework import serializers

from .models import User,Project,Ranking,Question,TableSubmission


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        # fields = ("id", "FirstName", "LastName", "Email", "Password")
        fields = "__all__"


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = "__all__"

class RankingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ranking
        fields = "__all__"

class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = "__all__"

class TableSubmissionSerializer(serializers.ModelSerializer):
    class Meta:
        model = TableSubmission
        fields = "__all__"
