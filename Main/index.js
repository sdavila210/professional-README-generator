// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter project title:',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter brief description of the project:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter steps required to install the project:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use:',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Include guidelines of how to contribute to the project:',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Provide testing instructions:',
    },
    {
        type: 'input',
        name: 'credits',
        message: 'List collaborators and include links to resources used:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select the license used for your project:',
        choices: ['MIT License', 'Apache License 2.0', 'GNU General Public License v3.0', 'None'],
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your github username'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data, (err) =>
        err ? console.log(err) : console.log('README.md has been created!'));
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            const readmeContent = generateMarkdown(answers);
            writeToFile('README.md', readmeContent);
        });
}

// Function call to initialize app
init();
