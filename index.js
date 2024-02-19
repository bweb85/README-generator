const fs = require("fs"); //# native to node
const path = require('path'); //#optional, native to node, can be useful but don't need to use it
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown"); 

// array of questions for user
const questions = [

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
    inquirer
    .prompt({
        type: 'input',
        name: 'name',
        message: 'What is the name of your repo?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Describe what your repo does',
      },
      {
        type: 'input',
        name: 'install',
        message: 'What packages are needed to run your repo?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'How can users use your repo?',
      },
      {
        type: 'input',
        name: 'license',
        message: 'Do you have a license for your repo?',
      },
      {
        type: 'input',
        name: 'contributors',
        message: 'Who has contributed to your repo? Include links to their github profiles',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Are there any tests for your application? Do you have code examples for how they run? ',
      },
      {
        type: 'input',
        name: 'License',
        message: 'Do you have a license for your repo?',
      },) //# questions can go here or in function to write a readme file above Can add an arry using [] inside (). Questions must be objects - look at documentation for keys
    .then((answers) =>{
        console.log(answers);
    }); //#  accepts a callback function. Grab multiple responses using answers.name (put in value of name for object)
    fs.writeFile(`log.txt` , JSON.stringify(answers.pikachu), (err) => { //# creating file
        console.log(err)
    })
}

// function call to initialize program
init();

// One way would be to create the README as a string with string literal, then write that to the file.
// Create the final README structure with string literal first, with #, ##, spaces etc., then just put the data where it is needed.