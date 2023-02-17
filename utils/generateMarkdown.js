// function to generate markdown for README
function generateDescription (description) {
  return `
  ## Description
  ${description}
  `;
}

function generateMarkdown(data) {
  return `# ${data.title}
${data.Description !== "" ? generateDescription(data.Description) : ""}
`;
}

module.exports = generateMarkdown;
