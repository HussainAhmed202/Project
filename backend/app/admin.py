from django.contrib import admin

from . models import Project, User, Ranking, Question, TableSubmission

# Register your models here.
admin.site.register(User)
admin.site.register(Project)
admin.site.register(Ranking)
admin.site.register(Question)
admin.site.register(TableSubmission)

