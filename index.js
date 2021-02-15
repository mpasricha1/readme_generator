const inquirer = require('inquirer'); 
const fs = require('fs'); 
const generateReadme = require('./generateReadme.js');

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
			choices: ["MIT","LGPL-3.0","MPL-2.0", "AGPL-3.0", "Unlicense", "Apache-2.0", "GPL-3.0"]
		}, 
		{
			type: "input", 
			name: "contributing", 
			message: "Enter the names of the contributors: "
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



async function main(){
	try{
		const promptAnswers = await promptUser(); 
		const readMe = generateReadme(promptAnswers); 
		console.log(readMe)
	}catch(err){
		console.log(err)
	}
	
}

main();