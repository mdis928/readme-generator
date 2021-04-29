
function generateMarkdown(data) {
    if(data.License == "MIT"){
        data.License = "[![Github license](https://img.shields.io/badge/license-MIT-blue)]"
    } else if (data.License == "APACHE 2.0"){
        data.License = "[![Github license](https://img.shields.io/badge/license-APACHE%202.0-green)]"
    } else if (data.License == "GPL 3.0"){
        data.License = "[![Github license](https://img.shields.io/badge/license-GPL%203.0-yellow)]"
    } else if (data.License == "BSD 3"){
        data.License = "[![Github license](https://img.shields.io/badge/license-BSD%203-red)]" 
    } else{
        data.license = "None"
    }
    
return `
    
# ${data.Title}
https://github.com/${data.Username}/${data.Title}
## Description
${data.Description}
## Table of Contents
* [Installiation] (#installiation)
* [Usage] (#usage)
* [License] (#license)
* [Contributions] (#contributions)
* [Tests] (#tests)
* [Questions] (#questions)
## Installiations 
The following dependencies must be installed to run the application: ${data.Installiation}
## Usage
In order to use this app, ${data.Usage}
## License
This project is licensed under: ${data.License}
## Contributing
Contributors: ${data.Contributions}
## Test
This following is needed to run a test: ${data.Tests}
## Questions
If you have any questions about the repo, contact ${data.Contributions} at ${data.Username} via github or ${data.Email} via email
    `
}

module.exports = generateMarkdown; 