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
