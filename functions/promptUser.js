const inquirer = require('inquirer'); 

function promptUser(){
	return inquirer.prompt([
		{
			type: "input", 
			name: "title", 
			message: "Enter the project name: " 

		}, 
		{
			type: "input", 
			name: "description", 
			message: "Enter a project description: "
		}, 
		{
			type: "input",
			name: "installation", 
			message: "Enter any installation instructions: "
		}, 
		{
			type: "input", 
			name: "usage", 
			message: "Describe the usage of this app: "
		}, 
		{
			type: "list", 
			name: "license", 
			message: "Select the license type for this project: ", 
			choices: ["MIT","Apache","Mozilla", "GNU", "Unlicense"]
		}, 
		{
			type: "input", 
			name: "contributing", 
			message: "Enter guidelines for contributing to this project: "
		}, 
		{
			type: "input", 
			name: "tests", 
			message: "Enter any test instructions: " 
		},
		{
			type: "input", 
			name: "username", 
			message: "Enter your github username: "
		},
		{
			type: "input", 
			name: "email", 
			message: "Enter your email: "
		}

	])
}

module.exports = promptUser;