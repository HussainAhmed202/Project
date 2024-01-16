from rest_framework import serializers

from .models import Project, Question, Ranking, TableSubmission, User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
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


class LoginSerializer(serializers.Serializer):
    email = serializers.CharField()
    password = serializers.CharField()


class SignUpSerializer(serializers.Serializer):
    email = serializers.CharField()
    password = serializers.CharField()
    firstName = serializers.CharField()
    lastName = serializers.CharField()
