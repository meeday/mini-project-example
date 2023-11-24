const generateHTML = ({ name, location, bio, linkedin, github }) => 
    `
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <header class="p-5 mb-4 header bg-light">
    <div class="container">
    <h1 class="display-4"> Hi! My name is ${name}</h1>
    <p class="lead">I am from ${location}.</p>
<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">About me</h5>
    <h6 class="card-subtitle mb-2 text-muted">Bio</h6>
    <p class="card-text">${bio}</p>
    <a href="${github}" target="_blank" class="card-link">Github link</a>
    <a href="${linkedin}" target="_blank" class="card-link">Linkedin link</a>
  </div>
</div>
  </header>
</body>
</html>  
    `
const questions = [
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
          },
          {
            type: 'input',
            name: 'location',
            message: 'Where are you from?',
          },
          {
            type: 'input',
            name: 'bio',
            message: 'Tell us a little bit about your self.',
          },
          {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub URl',
          },
          {
            type: 'input',
            name: 'linkedin',
            message: 'Enter your LinkedIn URL.',
          },
    ]

module.exports = {
    generateHTML,
    questions
}

