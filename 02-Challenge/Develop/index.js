// TODO: Include packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown")

const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      name: 'faveReptile',
      message: 'What is your favorite reptile?'
    },
  ])
  .then(answers => {
    console.info('Answer:', answers.faveReptile);
  });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}
// link: https://www.geeksforgeeks.org/node-js-fs-writefile-method/#:~:text=writeFile()%20method%20is%20used,the%20functionality%20of%20the%20method.

// TODO: Create a function to initialize app
function init() { }
// 

// Function call to initialize app
init();

// Extra
// dependencies: 
// chalk for colorful logs
// meow for parsing
// welcome

// uses: 
// copying ts config from a previous project
// "npx tsconfig.json" it will ask what kind of project then assign a tsconfig from the right project.
// then publish to npm as package

// 1. build out cli
// 2. 