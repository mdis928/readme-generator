const inquirer = require('inquirer');
const fs = require('fs');
const util = require("util")

const generatorMarkdown = require('./generateMarkdown')

const questions = ([
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
        type: "input",
        message: "What license is being used? (i.e...MIT)",
        name: "License"
    },
    {
        type: "input",
        message: "List everyone that has contributed to this project",
        name: "Contributions"
    },
    {
        type: "input",
        message: "Contact info for inquiries",
        name: "Questions"
    },
    {
        type: "input",
        message: "Did you provide any tests? If so, could you provide any details",
        name: "Tests"
    }
  ])




  function writeToFile (fileName, data) {

      fs.writeFile(fileName, data, function(err) {
          console.log(fileName)
          console.log(data)
          if (err) {
                return console.log(err)
          } else {
              console.log('Sucess!')
          }
      })
  }


function init () {
    inquirer.prompt (questions)
    .then(function(data) {
        writeToFile("README.me", generatorMarkdown(data));
        console.log(data)
    })
}


init();


//   .then((data) => {
//     const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;

//     fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
//       err ? console.log(err) : console.log('Success!')
//     );
//   });
