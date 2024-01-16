#include <iostream>

int main() {
    std::string userInput;
    std::cout << "Enter something: ";
    std::getline(std::cin, userInput);
    std::cout << "You entered: " << userInput << std::endl;
    return 0;
}
