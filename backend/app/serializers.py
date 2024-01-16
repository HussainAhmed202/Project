from rest_framework import serializers

<<<<<<< HEAD
from .models import User,Project,Ranking,Question,TableSubmission
=======
from .models import Project, Question, User
>>>>>>> 93e96852ae9ff7c03340fd05a1bb57776562a89a


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        # fields = ("id", "FirstName", "LastName", "Email", "Password")
        fields = "__all__"


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = "__all__"

<<<<<<< HEAD
class RankingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ranking
        fields = "__all__"
=======

class LoginSerializer(serializers.Serializer):
    Email = serializers.CharField()
    Password = serializers.CharField()


class SignUpSerializer(serializers.Serializer):
    Email = serializers.CharField()
    Password = serializers.CharField()
    FirstName = serializers.CharField()
    LastName = serializers.CharField()

>>>>>>> 93e96852ae9ff7c03340fd05a1bb57776562a89a

class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
<<<<<<< HEAD
        fields = "__all__"

class TableSubmissionSerializer(serializers.ModelSerializer):
    class Meta:
        model = TableSubmission
=======
        # fields = ("id", "FirstName", "LastName", "Email", "Password")
>>>>>>> 93e96852ae9ff7c03340fd05a1bb57776562a89a
        fields = "__all__"
