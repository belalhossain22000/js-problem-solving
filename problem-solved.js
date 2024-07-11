// problem-1
const people = [
  {
    name: "John Doe",
    age: 30,
    gender: "Male",
  },
  {
    name: "Jane Smith",
    age: 25,
    gender: "Female",
  },
  {
    name: "Alice Johnson",
    age: 35,
    gender: "Female",
  },
  {
    name: "Bob Brown",
    age: 40,
    gender: "Male",
  },
];

const getMaleNames = (personArray) => {
  return people
    .filter((person) => person.gender === "Male")
    .map((male) => male.name);
}; 


// problem-2
const books = [
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { title: "1984", author: "George Orwell", year: 1949 },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
  { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
  { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 }
];

function getBookTitles(booksArray) {
  return booksArray.map(book => book.title);
}



// problem-3

// Function to square a number
function square(num) {
  return num * num;
}

// Function to double a number
function double(num) {
  return num * 2;
}

// Function to add 5 to a number
function addFive(num) {
  return num + 5;
}

// Compose function to square a number, double the result, and then add 5
function composeFunctions(num) {
  const squared = square(num);
  const doubled = double(squared);
  const result = addFive(doubled);
  return result;
}



// problem-4
const cars = [
  { make: "Toyota", model: "Corolla", year: 2010 },
  { make: "Honda", model: "Civic", year: 2008 },
  { make: "Ford", model: "Mustang", year: 2015 },
  { make: "Chevrolet", model: "Camaro", year: 2012 },
  { make: "Tesla", model: "Model 3", year: 2019 }
];

function sortCarsByYear(carsArray) {
  return carsArray.sort((a, b) => a.year - b.year);
}


// problem-6

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


function sumOfEvenNumbers(numbersArray) {
  return numbersArray.reduce((sum, number) => {
    if (number % 2 === 0) {
      return sum + number;
    } else {
      return sum;
    }
  }, 0);
}
