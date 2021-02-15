function generateReadme(promptAnswers){
	return `# ${promptAnswers.title}
![badge](https://img.shields.io/badge/license-${promptAnswers.license})
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