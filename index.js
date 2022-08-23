// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown.js');
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title"
    },
    {
        type: "input",
        message: "Please enter a description of your project.",
        name: "description"
    },
    {
        type: "input",
        message: "Please enter installation instructions for your project.",
        name: "installation"
    },
    {
        type: "input",
        message: "Please enter usage information for your project",
        name: "usage"
    },
    {
        type: "input",
        message: "Please enter contribution guidelines for your project",
        name: "contributions"
    },
    {
        type: "input",
        message: "Please enter test instructions for your project",
        name: "tests"
    },
    {
        type: "list",
        message: "Please select a license for your project",
        name: "license",
        choices: [
            "None",
            "GNU GPLv3",
            "MIT License",
            "The Unlicense"
        ]
    },
    {
        type: "input",
        message: "Please enter your GitHub username",
        name: "github"
    },
    {
        type: "input",
        message: "Please enter your email address",
        name: "email"
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) => {
        if (err) throw new Error(err);
    
        console.log("Readme successfully created.")
      });
    }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
      // Answers from the questions go on to create the README
      writeToFile("AutomatedREADME.md", answers);
    });
}

// Function call to initialize app
init();
