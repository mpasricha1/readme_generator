function generateReadme(promptAnswers){
	return `# ${promptAnswers.title}
![badge](https://img.shields.io/badge/License-${promptAnswers.license})
## Table of Contents 
* [Description](#description)
## Description
${promptAnswers.description}
## Installation Instructions
${promptAnswers.installation}
## Usage 
${promptAnswers.usage}
## Contributors 
${promptAnswers.contributing}

`
}

module.exports = generateReadme