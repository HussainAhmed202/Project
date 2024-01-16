from django.db import models
import json


# Create your models here.
class User(models.Model):
    firstName = models.CharField(max_length=100)
    lastName = models.CharField(max_length=100)
    email = models.EmailField()
    password = models.CharField(max_length=100)


class Project(models.Model):
<<<<<<< HEAD
    projName = models.CharField(max_length=200)
    dateModified = models.DateField()
    projectContent = models.TextField()
    isTrash = models.BooleanField()
    isArchived = models.BooleanField()
    ownerId = models.ForeignKey(User, on_delete=models.CASCADE)

class Ranking(models.Model):
    rankId = models.AutoField(primary_key=True)
    userId = models.ForeignKey(User, on_delete=models.CASCADE)
    lang = models.CharField(max_length=50)
    points = models.IntegerField()
    level = models.IntegerField()

class Question(models.Model):
    qNo = models.AutoField(primary_key=True)
=======
    ProjName = models.CharField(max_length=200)
    DateModified = models.DateField()
    ProjectContent = models.TextField()
    IsTrash = models.BooleanField()
    IsArchived = models.BooleanField()
    OwnerId = models.ForeignKey(User, on_delete=models.CASCADE)


class Question(models.Model):
>>>>>>> 93e96852ae9ff7c03340fd05a1bb57776562a89a
    type = models.CharField(max_length=50)
    difficulty = models.CharField(max_length=50)
    title = models.CharField(max_length=200)
    points = models.IntegerField()
    statement = models.TextField()
    inputFormat = models.TextField()
    outputFormat = models.TextField()
    inputConstraint = models.TextField()
<<<<<<< HEAD

class TableSubmission(models.Model):
    submitId = models.AutoField(primary_key=True)
    qNumber = models.ForeignKey('Question', on_delete=models.CASCADE)
    creatorId = models.ForeignKey(User, on_delete=models.CASCADE)
    isSuccessful = models.BooleanField()
    submitLang = models.CharField(max_length=50)
    createdAt = models.DateTimeField()
    



=======
>>>>>>> 93e96852ae9ff7c03340fd05a1bb57776562a89a
