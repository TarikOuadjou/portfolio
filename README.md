# Tarik Ouadjou - Portfolio

Personal portfolio website for Tarik Ouadjou, focused on data science, machine learning and research projects.

> **Important:** This project does not demonstrate any particular skills in HTML, CSS or JavaScript. It is a personal portfolio assembled primarily with the assistance of AI tools and should not be considered evidence of front-end development expertise.

## Structure

- `index.html` - Main HTML entry point
- `style.css` - Responsive layout, theme and component styles
- `script.js` - Portfolio data, routing and interactions
- `report/` - Private or public project reports, depending on the project

## Run locally

Open `index.html` directly in a browser, or use a local development server such as the VS Code Live Server extension:

```text
http://127.0.0.1:5500/index.html
```

No build step or package installation is required.

## Customize the portfolio

The portfolio content is managed in the data section at the top of `script.js`:

- `profile` - name, role, biography and contact links
- `education` - academic background and coursework
- `experience` - internships, teaching and association work
- `projects` - project descriptions, tags, reports and GitHub links
- `skills` - programming languages, tools and personal traits
- `interests` - personal interests shown in the Resume section

Project reports can be linked with a relative path such as:

```js
reportUrl: "report/project-report.pdf";
```

Confidential reports and repositories should not be uploaded. They can be represented with `reportConfidential` and `githubConfidential` instead.

## AI-assisted development

This portfolio was developed to a very large extent with the assistance of artificial intelligence tools. AI was used for code generation, refactoring, content structuring, interface improvements and implementation support. The final content, project selection and personal information were reviewed and adapted by Tarik Ouadjou.

## License

This repository is a personal portfolio. The content and project information belong to their respective owner and institutions. Please do not reuse personal information or confidential project material without permission.
