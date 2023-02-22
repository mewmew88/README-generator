function generateMarkdown(data) {
  const email = data.email || "N/A";
  const githubUrl = data.github ? `https://github.com/${data.github}` : "N/A";
  return `# ${data.title}

${data.description ? `## Description\n${data.description}\n` : ''}
${generateTableOfContents()}
${data.installation ? `## Installation\n${data.installation}\n` : ''}
${data.usage ? `## Usage\n${data.usage}\n` : ''}
${data.tests ? `## Tests\n${data.tests}\n` : ''}
${data.contributing ? `## Contributing\n${data.contributing}\n` : ''}
${generateLicense(data.license)}
${data.troubleshooting ? `## Troubleshooting\n${data.troubleshooting}\n` : ''}
For any further questions or concerns about this project, please feel free to contact me directly at:

- [GitHub](${githubUrl})
- [Email](${email})`;
}
//function to generate table of contents
function generateTableOfContents(tableOfContents) {
  return `
## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Tests](#tests)
* [Contributing](#contributing)
* [License](#license)
* [Troubleshooting](#troubleshooting)
`;
}
//function to generate license section
function generateLicense(license) {
  const licenseLink = {
    "MIT": "https://opensource.org/licenses/MIT",
    "APACHE 2.0": "https://opensource.org/licenses/Apache-2.0",
    "GPL 3.0": "https://www.gnu.org/licenses/gpl-3.0",
    "BSD 3": "https://opensource.org/licenses/BSD-3-Clause",
  };
  const licenseURL = licenseLink[license] || "";
  return `
## License

This project is licensed under the terms of the [${license}](${licenseURL}) license.`;
}
module.exports = generateMarkdown;