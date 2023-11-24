const inquirer = require('inquirer')
const fs = require('fs')
const { generateHTML, questions } = require('./generate-html')



inquirer.prompt(questions).then(answers => {
    const htmlPageContent = generateHTML(answers)

    createHtmlFile(htmlPageContent)
})



const createHtmlFile = (content) => fs.writeFile('index.html', content, (err) => err ? console.log(err) : console.log("successfully created profile card"))

