// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(booklist, bookName) {
  const Booklist = booklist.slice()
  Booklist.push(bookName);
  return Booklist;
  
  // Change code above this line
}

// Change code below this line
function remove(booklist, bookName) {
  const Booklist = booklist.slice()
  const book_index = Booklist.indexOf(bookName);
  if (book_index >= 0) {

    Booklist.splice(book_index, 1);
    return Booklist;

    // Change code above this line
    }
}