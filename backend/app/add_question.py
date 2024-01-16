# your_app/add_questions.py

from app.models import Question

# Example data for a question
question_data = {
    'type': 'Coding',
    'difficulty': 'Easy',
    'title': 'Print Hello World',
    'points': 5,
    'statement': 'Write a program that prints "Hello, World!" to the console.',
    'inputFormat': 'None',
    'outputFormat': 'String: Hello, World!',
    'inputConstraint': 'None',
}

# Use the create method to create and save in a single step
Question.objects.create(**question_data)
