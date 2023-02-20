// function to generate markdown for README
function generateDescription(description) {
  return `
  ## Description
  ${description}
 `;
}

function generateMarkdown(data) {
    return `# ${data.title}
  ${data.description !== '' ? generateDescription(data.description) : ''}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${data.license}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  ${data.faq}

  ## GitHub 
  ${data.github}

  ## Email
  ${data.email}
  `;
}
  module.exports = generateMarkdown;
  function newFunction() {
  ;''}