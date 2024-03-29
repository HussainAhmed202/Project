# Generated by Django 5.0.1 on 2024-01-17 14:36

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):
    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Challenges",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("type", models.CharField(max_length=50)),
                ("difficulty", models.CharField(max_length=50)),
                ("title", models.CharField(max_length=200)),
                ("points", models.IntegerField()),
                ("statement", models.TextField()),
                ("inputFormat", models.TextField()),
                ("outputFormat", models.TextField()),
                ("sampleInput", models.TextField()),
                ("sampleOutput", models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name="User",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("firstName", models.CharField(max_length=100)),
                ("lastName", models.CharField(max_length=100)),
                ("email", models.EmailField(max_length=254)),
                ("password", models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name="TableSubmission",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("isSuccessful", models.BooleanField()),
                ("submitLang", models.CharField(max_length=50)),
                ("createdAt", models.DateTimeField()),
                (
                    "qNumber",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE, to="app.challenges"
                    ),
                ),
                (
                    "creatorId",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE, to="app.user"
                    ),
                ),
            ],
        ),
        migrations.CreateModel(
            name="Ranking",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("lang", models.CharField(max_length=50)),
                ("points", models.IntegerField()),
                ("level", models.IntegerField()),
                (
                    "userId",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE, to="app.user"
                    ),
                ),
            ],
        ),
        migrations.CreateModel(
            name="Project",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("projName", models.CharField(max_length=200)),
                ("dateModified", models.DateField()),
                ("projectContent", models.TextField()),
                ("isTrash", models.BooleanField()),
                ("isArchived", models.BooleanField()),
                (
                    "ownerId",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE, to="app.user"
                    ),
                ),
            ],
        ),
    ]
