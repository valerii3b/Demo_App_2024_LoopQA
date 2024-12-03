# Demo App 2024 LoopQA

This project is a test automation framework that leverages [Playwright](https://playwright.dev/) and [Cucumber](https://cucumber.io/) to facilitate behavior-driven development (BDD) and end-to-end testing.

## Prerequisites

Ensure that you have the following installed on your system:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/valerii3b/Demo_App_2024_LoopQA.git

Navigate to the project directory:

    cd Demo_App_2024_LoopQA

Install the dependencies:

    npm install

Running Tests

To execute the tests, run:

    npm test

  or

    npx cucumber-js test

Reports generated by Cucumber

    You can check by simply finding the cucumber-report.html file in the root folder.

    Which provide you UI report info.

This command will initiate the test suite using Playwright and Cucumber.
Project Structure

    .vscode/: Contains Visual Studio Code settings.
    
    tests/: Directory for test specifications and step definitions.
    
    .gitignore: Specifies files and directories to be ignored by Git.
    
    cucumber-report.html: HTML report generated after test execution.
    
    cucumber-report.json: JSON report generated after test execution.
    
    cucumber.json: Configuration file for Cucumber.
    
    package-lock.json: Automatically generated file for locking dependencies.
    
    package.json: Lists project dependencies and scripts.
    
    playwright.config.js: Configuration file for Playwright.
    

Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.
License

This project is licensed under the MIT License. See the LICENSE file for details.
