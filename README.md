# Google Books Search

Google Books Search is a full stack (MERN) app that enables users to search for volumes from [Google Books](https://www.google.com/intl/en/googlebooks/about/index.html) and save the results to view at a later time.

# Tools used
* React
* MongoDB
* Mongoose
* Express
* Google Books API

# How to use

Users of the app can search for books by keyword(s) and title. 

![Google Book Search demo](client/public/gifs/GoogleBookSearchDemo.gif)

Once books are rendered to the page, clicking the *Save* button will add them to the Saved page, notifying the user.

![Google Book Search save function demo](client/public/gifs/GoogleBookSearchSaveDemo.gif)

Clicking the *View* button on either the Home page or the Saved page will take the user to the Google Books page for the book.

![Google Book Search view page function demo](client/public/gifs/GoogleBookSearchViewDemo.gif)

On the Saved Books page, clicking *Delete* for a book will remove it from this page as well as the Mongo database.

# Deployment

Deployed at https://google-books-search.herokuapp.com