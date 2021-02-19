const fs = require('fs'); 

function saveFile(readMe){
	fs.writeFile("README-test.md", readMe, (err) =>{
			err ? console.log(err) : console.log("File Created.")
		});
};

module.exports = saveFile;