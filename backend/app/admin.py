from django.contrib import admin

<<<<<<< HEAD
from . models import Project, User, Ranking, Question, TableSubmission
=======
from .models import Project, Question, User
>>>>>>> 93e96852ae9ff7c03340fd05a1bb57776562a89a

# Register your models here.
admin.site.register(User)
admin.site.register(Project)
<<<<<<< HEAD
admin.site.register(Ranking)
admin.site.register(Question)
admin.site.register(TableSubmission)

=======
admin.site.register(Question)
>>>>>>> 93e96852ae9ff7c03340fd05a1bb57776562a89a
