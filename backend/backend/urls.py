"""
URL configuration for backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import include, path
from rest_framework import routers
from app import views

<<<<<<< HEAD
router = routers.DefaultRouter()
router.register(r"user", views.GetUser)
router.register(r"project", views.ProjectView)
router.register(r"ranking", views.RankingView)
router.register(r"tablesubmission", views.TableSubmissionView)
router.register(r"question", views.QuestionView)

=======
# router = routers.DefaultRouter()
# router.register(r"user-login", views.LoginView, basename="login")
# router.register(r"project", views.ProjectView)
>>>>>>> 93e96852ae9ff7c03340fd05a1bb57776562a89a


# from app.views import current_datetime


# path("api/csrf", views.GetCSRFToken.as_view()),

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/login", views.LoginView.as_view()),
    path("api/signup", views.SignUpView.as_view()),
    path("api/all-projects", views.AllProjectView.as_view()),
    path("api/trash-projects", views.TrashProjectView.as_view()),
    path("api/archive-projects", views.ArchiveProjectView.as_view()),
    path("api/questions", views.QuestionView.as_view()),
    path("api/exe", views.ExecutionView.as_view()),
    path("api/update-archive/<int:project_id>", views.UpdateArchive.as_view()),
    path("api/update-trash/<int:project_id>", views.UpdateTrash.as_view()),
    path("api/project-detail/<int:project_id>", views.ProjectDetailView.as_view()),
]
