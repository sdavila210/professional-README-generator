// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'None') {
    return '';
  }
  const licenseBadge = {
    'MIT License': 'https://img.shields.io/badge/License-MIT-yellow.svg',
    'Apache License 2.0': 'https://img.shields.io/badge/License-Apache_2.0-blue.svg',
    'GNU General Public License v3.0': 'https://img.shields.io/badge/license-GPLv3-blue',
  };
  const badge = licenseBadge[license];
  return badge ? `${badge}` : '';
}



// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'None') {
    return '';
  }
  const licenseLinks = {
    'MIT License': 'https://opensource.org/licenses/MIT',
    'Apache License 2.0': 'https://opensource.org/licenses/Apache-2.0',
    'GNU General Public License v3.0': 'https://opensource.org/licenses/GPL-3.0',
  };
  const link = licenseLinks[license];
  return link ? `License URL: ${link}` : '';
}




// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    return '';
  }
  const licenseLink = renderLicenseLink(license);
  return `

  For more information on this license, go to: ${licenseLink}.`
}





// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);

  return `# ${data.title} 
  ![License Badge](${licenseBadge})

  ## Description
  ${data.description}

  ## Table of Contents
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [Contribution](#contribution)
  4. [Testing](#testing)
  5. [Credits](#credits)
  6. [License](#license)
  7. [Questions](#questions)

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
  ${renderLicenseBadge(data.license)}
  ${renderLicenseSection(data.license)}


  ## Questions
  github.com/${data.github}
  Email: ${data.email}
`;
}

module.exports = generateMarkdown;
