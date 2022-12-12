// TODO: Include packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown")
const fs = require("fs");
const inquirer = require('inquirer');

import inquirer from 'inquirer';

inquirer
  .prompt([
    /* Pass your questions in here */
    // 1. installation
    // 2. usage
    // 3. credits
    // 4. license
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}
// link: https://www.geeksforgeeks.org/node-js-fs-writefile-method/#:~:text=writeFile()%20method%20is%20used,the%20functionality%20of%20the%20method.

// TODO: Create a function to initialize app
function init() { }
// 

// Function call to initialize app
init();


