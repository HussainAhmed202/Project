from django.test import TestCase
from rest_framework import status
from rest_framework.test import APIClient

from .models import User


class LoginViewTestCase(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.user_data = {
            "email": "testuser@example.com",
            "password": "testpassword",
        }
        self.user = User.objects.create(
            email="testuser@example.com", password="testpassword"
        )

    def test_login_valid_user(self):
        response = self.client.post("api/login", self.user_data, format="json")
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn("token", response.data)

    def test_login_invalid_user(self):
        invalid_data = {
            "email": "invaliduser@example.com",
            "password": "invalidpassword",
        }
        response = self.client.post("api/login", invalid_data, format="json")
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertIn("Error", response.data)


class SignUpViewTestCase(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.signup_data = {
            "firstName": "John",
            "lastName": "Doe",
            "email": "testuser@example.com",
            "password": "testpassword",
        }

    def test_signup_valid_user(self):
        response = self.client.post("api/signup/", self.signup_data, format="json")
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn("token", response.data)
        self.assertIn("user registered", response.data["status"])

    def test_signup_duplicate_user(self):
        # Creating a user with the same email before attempting to sign up
        User.objects.create(email="testuser@example.com", password="existingpassword")

        response = self.client.post("api/signup/", self.signup_data, format="json")
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertIn("User with this email already exists", response.data["Error"])
