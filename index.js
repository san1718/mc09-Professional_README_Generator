// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// Creating an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Project name: ',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Description about the project: ',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'How do you install the application?: ',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How do you use the application (instructions)?: ',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Provide contribution guidelines: ',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Provide test instructions: ',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project: ',
    choices: ['MIT', 'GPLv3', 'Apache 2.0', 'BSD 3-Clause', 'None'],
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub username: ',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address: ',
  },
];

// Creating a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Your README.md was generated successfully!')
  );
}

// Creating a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    const markdownContent = generateMarkdown(answers);
    writeToFile('README.md', markdownContent);
  });
}

// Function call to initialize app
init();
