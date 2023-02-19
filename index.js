const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  // Title of Project
  {
    type: `input`,
    name: `title`,  
    message: `What is the title of your project?`
  },
  // Description
  {
    type: `input`,
    name: `description`,
    message: `Please provide a description of your project.`
  },
  // Installation guide 
  {
    type: `input`,
    name: `installation`,
    message: `Please provide installation instructions.`
  },
  // Usage
  {
    type: `input`,
    name: `usage`,
    message: `Please provide usage information.`
  },
  // License (multiple choice)
  {
    type: "list",
    choices: [`MIT`, `APACHE 2.0`, `GPL 3.0`, `BSD 3`, `None`],
    name: "license",
    message: "What license would you like to use?",
  },
  // Contributing
  {
    type: `input`,
    name: `contributing`,
    message: `Please provide contribution guidelines.`
  },
  // Tests
  {
    type: `input`,
    name: `tests`,
    message: `Please provide test instructions.`
  },
  // Questions
  {
    type: `input`,
    name: `questions`,
    message: `Please provide.`
  },
  // GitHub username
  {
    type: `input`,
    name: `github`,
    message: `Please provide your GitHub username.`
  },
  // Email address
  {
    type: `input`,
    name: `email`,
    message: `Please provide your email address.`
  }

];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(`README.md`, data, (err) => {
    if (err) {
      return console.log(err);
      } else {
        console.log(`Success!`);
        }
        });
}

// function to initialize program
function init() {
  inquirer
  .prompt(questions)
  .then((answers) => {
    console.log(answers);
    const markdown = generateMarkdown(answers);
    console.log(markdown);
    writeToFile(`README.md`, markdown);
  });
}

// function call to initialize program
init();
