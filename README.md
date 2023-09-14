Welcome to my book finder application.

This App was built with CSS, JavaScript, and React.js as the library.

The app allows users to search for books by title, author, keyword, or ISBN. 
It provides a simple interface for book lovers to explore a new world by discovering new reads, learning about their favorite authors, and exploring a vast collection of books from various genres.

When users type an author's name, a book title, an ISBN, or a keyword, the search returns all books that fit the input value, in addition to details about each of the books.

At the moment, the only route is from the "enter" button. 
I would have preferred that after clicking the "enter" button, I would be routed to a "books results" page that had blocks of all the results, and when each book is clicked, I would be routed to that book's dedicated page; however, I struggled to get this route to work, and once it did, I decided to stop.
if I had more time to make mistakes and learn from my mistakes, I would have done better.


Successes:
 The "enter" button routes to a books results page for users to choose from.

 Improvments:
 -Clicking the back button from the books search results page does not clear the data from the previous search.
 -If a new search is to be done, the cover page must be refreshed first, otherwise the search will return results from a previous search.

Technologies Used:

React.js:I used React JS to build the different components-homepage, bookspage, mainpage.

API Integration: I used google books APIs to fetch books and their details, and to ensure that information returned is up to date.

CSS: I used CSS styles to add a simple style to the user interface.

Installation
To run the Book Finder App locally on your machine, follow these steps:

1. Clone this repository to your local machine using "git clone":
git clone https://github.com/AniediAUbokudom/bookfinderapp.git

2. Navigate to the project directory:
cd my-book-app

3. Install the required dependencies using npm:
npm install
 
4. Start the development server:
npm start:The app should now be running locally and accessible in your web browser at http://localhost:3000.

5. Usage:
Open the Book Finder App in your web browser using.
a. Use the search bar to enter a book title, author's name, keyword, or an ISBN and click "enter." 
b. Explore different books and discover your next read!

6. Contributing:
If you'd like to contribute to the development of the Book Finder App, please follow these steps:
 a. Fork the repository to your GitHub account.
b. Create a new branch for your feature or bug fix.
c. Make your changes and commit them with descriptive commit messages.
d. Push your changes to your forked repository.
e. Don't forget your API key:
    This Book Finder App relies on google books API to fetch book data.
     You will need to obtain an API key from the google developer console or any API provider and configure it in the app 
    for it to work properly. 

Contact
For any questions or inquiries about the Book Finder App, please contact:

Aniedi Ubokudom
Email: aniediaubokudom@gmail.com
GitHub: https://github.com/AniediAUbokudom
Thank you for using the Book Finder App! Happy reading! 📚✨