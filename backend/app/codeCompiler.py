import json
import subprocess

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
print(p1.stdout)

# output_start = p1.stdout.find("{")
# output_end = p1.stdout.rfind("}") + 1
# json_output = p1.stdout[output_start:output_end]

# # Print the extracted JSON output
# print(json_output)
