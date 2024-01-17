#include <iostream>

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

    return 0;}