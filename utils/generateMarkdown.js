// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT License':
        return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
        break;
    case 'GNU GPLv3':
        return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
        break;
    case 'The Unlicense':
      return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;
      break;
    case 'None':
      return '';
      break;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT License':
        return '[MIT License](https://choosealicense.com/licenses/mit/)';
        break;
    case 'GNU GPLv3':
      return '[GNU GPLv3](https://choosealicense.com/licenses/gpl-3.0/)';
      break;
    case 'The Unlicense':
      return '[Unlicense](https://choosealicense.com/licenses/unlicense/)';
      break;
    case 'None':
      return '';
      break;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `## License
  This project is ${renderLicenseLink(license)} licensed.`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ${renderLicenseBadge(data.license)}
  
  ## Description
  ${data.description}
  
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribution](#contributions)
  * [Tests](#tests)
  * [License](#license)
  * [Questions](#questions)

  
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Contribution
  Built by
  ${data.contributions}
  ## Tests
  ${data.tests}

  ## Questions
  Please feel free to use the following links to reach out with any questions: <br/>
  * [Email](mailto:${data.email})
  * [GitHub](https://www.github.com/${data.github})
  
  ${renderLicenseSection(data.license)}

  <div align="center">Made with blood, sweat, tears, and ❤️
  <div align="center">Rock on 🤘
  
  `;
}

module.exports = generateMarkdown;
