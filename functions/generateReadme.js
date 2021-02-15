function generateReadme(promptAnswers){
	return `# ${promptAnswers.title}
![badge](https://img.shields.io/badge/License-${promptAnswers.license})

## Table of Contents 
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Question](#questions)

## Description
${promptAnswers.description}
## Installation
${promptAnswers.installation}
## Usage 
${promptAnswers.usage}
## License
This application is licenses by ${promptAnswers.license}
## Contributing
${promptAnswers.contributing}
## Tests
## Questions
Questions can be sent to the following email ${promptAnswers.email} or you can visit my github page at [GitHub Link](#https://github.com/${promptAnswers.username}).

`
}

module.exports = generateReadme