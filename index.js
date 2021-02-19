const generateReadme = require('./functions/generateReadme.js');
const promptUser = require('./functions/promptUser.js');
const saveFile = require('./functions/saveFile.js');

async function main(){
	try{
		const promptAnswers = await promptUser(); 
		const readMe = generateReadme(promptAnswers); 
		saveFile(readMe);
	}catch(err){
		console.log(err);
	};	
};

main();