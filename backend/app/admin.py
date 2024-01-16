from django.contrib import admin

from .models import Project, Question, Ranking, TableSubmission, User

# Register your models here.
admin.site.register(User)
admin.site.register(Project)
admin.site.register(Ranking)
admin.site.register(Question)
admin.site.register(TableSubmission)
