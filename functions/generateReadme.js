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
## Installation Instructions
${promptAnswers.installation}
## Usage 
${promptAnswers.usage}
## License
## Contributing
${promptAnswers.contributing}
## Tests
## Questions
`
}

module.exports = generateReadme