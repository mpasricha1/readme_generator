# Professional Readme Generator
![badge](https://img.shields.io/badge/License-Unlicense)

## Table of Contents 
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Question](#questions)

## Description
The purpose of this project was to help users create a professional looking read me for their projects. The user is prompted with several questions that help them create the perfect read me. Each question corresponds to a section of the read me. After the user inputs all the information about the project the cli app will create the read me based on the information input. This will ensure the user is using best practice with their readme in an easy to use cli app. 
## Installation
The install process for this project are fairly simple. First run npm install, this will install the two packages require for this program which are: inquirer and fs. To run the application, while in the root folder for the application run npm index
## Usage 
There are three main functions for this application: promptUser, generateReadMe and finally saveFile. When the application is run the promptUser function is called. This function imports the inquirer module in order to create a prompt to the user to input the needed information. Next the read me is generated using the generateReadMe function. A simple function that takes the answers from prompt user and uses that information to return a readme document already marked up. Then the saveFile function imports the fs module and saves the newly created read me. This is all controlled from a main function within the index.js file. 
## License
This application is licensed by Unlicense
## Contributing
Feel free to fork and contribute in anyway you see fit. 
## Tests
## Questions
Questions can be sent to the following email markp862@gmail.com 
OR you can visit my github page [mpasricha1](https://github.com/mpasricha1).

