function generateReadme(promptAnswers){
	return `
	# ${promptAnswers.title}

	## Description
	${promptAnswers.description}


	`
}

module.exports = generateReadme