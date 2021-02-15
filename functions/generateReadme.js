function generateReadme(promptAnswers){
	return `# ${promptAnswers.title}
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