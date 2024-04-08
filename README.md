# Issue-Tracker
A full stack application, which helps to track issues/bugs for the Project

### Tech Stack

Node.js, Express.js, Mongodb , EJS , JavaScript , Html, css, Bootstrap

### How to setup the project on local system

  1. Clone this project
  2. Start by installing npm if you don't have it already
  3. Navigate to Project Directory

After reaching the project directory you have to run the following the command
   ```` 
        npm install 
        npm start || node index.js
   ````

### Features

## Home Page 
A list of projects will be displayed. A button will be provided to create a new project

## Create Project Page
The following fields will be accepted to create a project:

  1. Name
  2. Description
  3. Author

Upon clicking the "Create Project" button, new project will be created and will be added to the list of projects

## Project Details Page
Upon clicking on "Open project" button on the home page, the user will be redirected to the Project Detail Page, where they will be able to view bugs related to that project

The following actions can be performed by the user on this page:

  1. All issues related to that project will be shown when user clicks on "Show All Issues" button
  2. User can filter issues based on multiple labels and also by author using "Filter Issues" button
  3. User can also search issues by title and description using "Search Issues" button
  4. "Create Issue" button will be provided to create new issue for the project

## Create Issue Page
The user will be able to create an issue for a project on the Create Issue Page. The following fields will be accepted:

  1. Title
  2. Description
  3. Author
  4. Multiple Labels

Upon clicking "Create Issue" button, new issue will be created for that particular project

### Folder Structure

```
Issue Tracker
    |
    |--->assets--->|js--->|--->filterIssues.js  
    |                     |--->searchIssues.js      
    |
    |--->config--->mongoose.js
    |
    |--->controllers-->|-->home_controller.js
    |                  |-->project_controller.js
    |
    |--->models---->|-->issue.js
    |               |-->project.js
    |
    |--->routes---->|-->index.js
    |               |-->project.js
    |
    |--->views---->|partials--->|--->_header.ejs 
    |                           |--->_issue_form.ejs
    |                           |--->issues.ejs
    |                           |--->_project_form.ejs
    |              |--->home.ejs 
    |              |--->layout.ejs
    |              |--->project_page.ejs
    |
    |-->index.js
    |-->package-lock.json
    |-->package.json