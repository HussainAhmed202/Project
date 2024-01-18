from django.contrib import admin

from .models import Challenge, Project, Ranking, TableSubmission, User

# Register your models here.
admin.site.register(User)
admin.site.register(Project)
admin.site.register(Ranking)
admin.site.register(TableSubmission)
admin.site.register(Challenge)
