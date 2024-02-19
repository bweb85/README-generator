// function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}
${data.badge}
  
**Table of Contents**
     *[Description](#description) 
     *[Installation](#installation)
     *[Usage](#usage)
     *[License](#license)
     *[Contributors](#contributors)
     *[Questions](#questions)

## Description 
${data.description}
## Installation
${data.install}
## Usage
${data.usage}
## License
Copyright <YEAR> <COPYRIGHT HOLDER>
${data.boilerplate} 
## Contributors
${data.contributors}
## Questions
[github](${data.creator})
${data.questions}
  `;
  }
  
  module.exports = generateMarkdown;