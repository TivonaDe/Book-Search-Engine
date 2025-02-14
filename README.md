# Book-Search-Engine
  ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
  ## Description
  The Book Search Engine is a full-stack MERN (MongoDB, Express.js, React, Node.js) application that integrates with the Google Books API to provide users with a clean interface to:
Search for Books by entering keywords.
Create a user account or log in using an existing account.
Save books to their personal library while logged in.
View and manage (remove) their saved books at any time.
Log out to end the session.
This project converts a legacy RESTful API to GraphQL for more efficient data fetching and features JWT (JSON Web Token) authentication to protect user data. It’s deployed on Render, so end users can seamlessly explore new books without hosting constraints.
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Test](#test)
  - [License](#license)
  - [Questions](#questions)
  ## Installation
  Clone the repository to your local machine:git clone https://github.com/TivonaDe/Book-Search-Engine.git To run this project locally, follow these steps:

Navigate to the project directory:

cd Book-Search-Engine

Install dependencies:

npm install

Start the application:

npm run develop

If the application does not open automatically, open your browser and navigate to http://localhost:3000.
  ## Usage
 Basic Functionality
Search for Books
From the homepage, enter a keyword into the search field and click Submit.
The app displays multiple results from the Google Books API, showing each book’s title, authors, description, image, and a link to Google Books.
Login/Signup
Click Login/Signup to open a modal, then toggle between Signup and Login.
Signup requires username, email, and password. Upon successful signup, you are automatically logged in.
Login requires your existing email and password. On success, the modal closes and you’re logged in.
Saving Books (Requires Login)
After logging in, you can search for books as before. Each result now includes a Save button.
Clicking Save adds that book to your personal collection.
Viewing & Removing Saved Books
Once logged in, you’ll see a Saved Books menu option. Click it to view a list of your saved books.
Each saved book displays a Remove button that, when clicked, deletes it from your library.
Logout
When you’re done, click Logout to end your session. The navigation reverts to Search and Login/Signup options.
  ## Contribution
  none
  ## Test
  none
  ## License
  MIT License
  ## Questions
  - [GitHub](TivonaDe)
  - Email: devonacanada@gmail.com
  - [Link]( https://github.com/TivonaDe/Book-Search-Engine)

