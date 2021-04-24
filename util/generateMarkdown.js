

function generateMarkdown(data) {
    return `
    
    # ${data.title}
    https://github.com/${data.Username}/${data.Title}
    #Description
    ${data.description}
    # Table of Contents
    * [Installiation] (#installiation)
    * [Usage] (#usage)
    * [License] (#license)
    * [Contributing] (#tests)
    * [Questions] (#questions)
    # Installiations 
    The following dependencies must be installed to run the application 
    # Usage
    In order to use this app, ${data.Usage}
    # License
    This project is licensed under the ${data.License} License.
    ![Github license](https://img.shields.io./badge/license-MIT-blue.svg)
    # Contributing
    Contributors: ${data.contributing}
    #Test
    This following is needed to run the test: ${data.Tests}
    # Questions
    If you have any questions about the repo, contact ${data.Usage}
    `
}

module.exports = generateMarkdown; 