// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  1. [Installation](#installation)
  2. [Usage](#Usage)
  3. [Contribution](#contribution)
  4. [Testing](#testing)
  5. [Credits](#credits)
  6. [License](#license)

  ## Installation
  ${data.installation}

  ## Usage

  ${data.usage}

  ## Contribution
  ${data.contribution}

  ## Testing
  ${data.test}

  ## Credits
  ${data.credits}

  ## License
  ${data.license}
`;
}

module.exports = generateMarkdown;
