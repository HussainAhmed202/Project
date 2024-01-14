from rest_framework import serializers

from .models import Project, User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        # fields = ("id", "FirstName", "LastName", "Email", "Password")
        fields = "__all__"


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = "__all__"


class LoginSerializer(serializers.Serializer):
    Email = serializers.CharField()
    Password = serializers.CharField()


class SignUpSerializer(serializers.Serializer):
    Email = serializers.CharField()
    Password = serializers.CharField()
    FirstName = serializers.CharField()
    LastName = serializers.CharField()
