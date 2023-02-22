// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description

  ${data.description}

## Table of Contents

    * [Installation](#installation)
    * [Usage](#usage)
    * [Tests](#tests)
    * [Contributing](#contributing)
    * [License](#license)
    * [Questions](#questions)

## Installation

  ${data.installation}

## Usage

  ${data.usage}

## Tests

  ${data.tests}   

## Contributing

  ${data.contributing}

## License

  ${data.license}

## Questions

  Any further questions about this project, please contact me directly at:
  [GitHub](https://github.com/${data.github})
  [Email](${data.email})
  `;
  }

  module.exports = generateMarkdown;
  function newFunction() {
    ;''}