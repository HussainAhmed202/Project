import json
import os
import subprocess

import js2py
from js2py import require

# with open("exePy.js", "r") as rf:
#     jscode = rf.read()

# print(jscode)


# ctx = js2py.EvalJs(enable_require=True)
# js2py.translate_file("exePy.js", "exePy.py")
# ctx.execute(jscode)
# from exePy import exePy

# fetch request
request = {
    "language": "CPP",
    "input": """10
    10
    """,
    "code": """#include <iostream>

int main() {
    // Declare variables for base and height
    double base, height;

    // Prompt the user to enter the base and height
    std::cout << "Enter the base of the triangle: ";
    std::cin >> base;

    std::cout << "Enter the height of the triangle: ";
    std::cin >> height;

    // Calculate the area of the triangle
    double area = 0.5 * base * height;

    // Display the result
    std::cout << "The area of the triangle is: " << area << std::endl;

    return 0;}""",
}

lang_to_exefile_mapping = {
    "Python": "executePython.js",
    "Java": "executeJava.js",
    "CPP": "executeCPP.js",
    "C": "executeC.js",
}


lang = request["language"]
file_to_execute = lang_to_exefile_mapping[lang]


req = json.dumps(request)
# print(req)

# EXG:  node executePython.js {"language": "Python","code": 'user_input = input("Enter something: ")\nprint("You entered:", user_input)',"input": "Hello in python",}
p1 = subprocess.run(["node", file_to_execute, req], capture_output=True, text=True)
output = p1.stdout
