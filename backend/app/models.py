from django.db import models


# Create your models here.
class User(models.Model):
    FirstName = models.CharField(max_length=100)
    LastName = models.CharField(max_length=100)
    Email = models.EmailField()
    Password = models.CharField(max_length=100)


class Project(models.Model):
    ProjName = models.CharField(max_length=200)
    DateModified = models.DateField()
    ProjectContent = models.TextField()
    IsTrash = models.BooleanField()
    IsArchived = models.BooleanField()
    OwnerId = models.ForeignKey(User, on_delete=models.CASCADE)
