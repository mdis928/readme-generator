const inquirer = require('inquirer');
const fs = require('fs');
// const util = require("util")

const generatorMarkdown = require('./generateMarkdown')

// array of questions
const questions = [
    {
      type: 'input',
      message: 'What is the title of the project?',
      name: 'Title',
    },
    {
      type: 'input',
      message: 'What is the project about? Please give a detailed description about what you are working on',
      name: 'Description'
      
    },
    {
      type: 'input',
      message: "Table of Contents",
      name: "Table of Contents"
    },
    { type: "input",
      message: "What does the user need to install to run this app (Any dependencies?)",
      name: "Installiation"
    },
    {
        type: 'input',
        message: "How is the app used? Please give a set of instructions",
        name: "Usage"
    },
    {
        type: "list",
        message: "What license is being used? (i.e...MIT)",
        name: "License",
        choices: ["MIT","APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
    },
    {
        type: "input",
        message: "List everyone that has contributed to this project",
        name: "Contributions"
    },
    {
        type: "input",
        message: "The following is needed to perform a test:",
        name: "Tests"
    },
    {
        type: "input",
        message: "Contact info for inquiries",
        name: "Questions"
    },
    {
        type: "input",
        message: "What is your Github username",
        name: "Username"
    },
    { 
        type: "input",
        message: "what is your email address?",
        name: "Email"

    },
    
  ]



// write readme files
  function writeToFile (fileName, data) {

      fs.writeFile(fileName, data, function(err) {
          console.log(fileName)
          console.log(data)
          if (err) {
                return console.log(err)
          } else {
              console.log('Sucess! Check out the README.MD! :)')
          }
      })
}



// initiate program
function init () {
    inquirer.prompt (questions)
    .then(function(data) {
        writeToFile("README.MD", generatorMarkdown(data));
        console.log(data)
    })
}


function generateBadge (data) {
    if(data.license == "MIT"){
        data.license = "[![Github license](https://img.shields.io/badge/license-MIT-blue)]"
    } else if (data.license == "APACHE 2.0"){
        data.license = "[![Github license](https://img.shields.io/badge/license-APACHE%202.0-green)]"
    }

}





// function call to initiate program
init();







//   .then((data) => {
//     const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;

//     fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
//       err ? console.log(err) : console.log('Success!')
//     );
//   });
