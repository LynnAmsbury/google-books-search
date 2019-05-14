# Google Books Search

Google Books search is a full stack (MERN) app that enables users to search for volumes from [Google Books](https://www.google.com/intl/en/googlebooks/about/index.html) and save the results to view at a later time.

# Tools used
* MongoDB
* Mongoose
* React
* Express
* Google Books API
* Foundation via [foundation-sites](https://www.npmjs.com/package/foundation-sites) and [react-foundation](https://www.npmjs.com/package/react-foundation) npm packages
* Socket.io

# How to use

Users of the app can search for books by keyword(s) and title. 

Once books are rendered to the page, clicking the *Save* button will add them to the Saved page, notifying the user.

Clicking the *View* button on either the Home page or the Saved page will take the user to the Google page for the book.

On the Saved page, clicking *Delete* for a book will remove it from this page as well as the Mongo database.

# Deployment

Deployed at https://google-books-search.herokuapp.com