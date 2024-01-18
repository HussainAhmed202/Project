import json

from django.db import models


# Create your models here.
class User(models.Model):
    firstName = models.CharField(max_length=100)
    lastName = models.CharField(max_length=100)
    email = models.EmailField()
    password = models.CharField(max_length=100)


class Project(models.Model):
    projName = models.CharField(max_length=200)
    dateModified = models.DateField()
    projectContent = models.TextField()
    isTrash = models.BooleanField()
    isArchived = models.BooleanField()
    ownerId = models.ForeignKey(User, on_delete=models.CASCADE)


class Ranking(models.Model):
    userId = models.ForeignKey(User, on_delete=models.CASCADE)
    lang = models.CharField(max_length=50)
    points = models.IntegerField()
    level = models.IntegerField()


class Challenge(models.Model):
    TYPE_CHOICES = [
        ("basic", "Basic"),
        ("advance", "Advance"),
        ("intermediate", "Intermediate"),
    ]

    DIFFICULTY_CHOICES = [
        ("easy", "Easy"),
        ("hard", "Hard"),
        ("medium", "Medium"),
    ]

    type = models.CharField(max_length=50, choices=TYPE_CHOICES)
    difficulty = models.CharField(max_length=50, choices=DIFFICULTY_CHOICES)
    title = models.CharField(max_length=200)
    points = models.IntegerField()
    statement = models.TextField()
    inputFormat = models.TextField()
    outputFormat = models.TextField()
    sampleInput = models.TextField()
    sampleOutput = models.TextField()


class TableSubmission(models.Model):
    qNumber = models.ForeignKey("Challenge", on_delete=models.CASCADE)
    creatorId = models.ForeignKey(User, on_delete=models.CASCADE)
    isSuccessful = models.BooleanField()
    submitLang = models.CharField(max_length=50)
    createdAt = models.DateTimeField()
