require("dotenv").config();

const dbUrl = process.env.DATABASE_URL;
console.log(`Connecting to DB: ${dbUrl}`);

// NOTE: This is a comment
const englishCode = "en-US";
const spanishCode = "es-ES";

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

/**simple function that returns 42**/
function getTheAnswer() {
  return 42;
}

//simple function that returns an array of flavors
function getAllFlavors() {
  return ["chocolate", "vanilla", "strawberry"];
}

function add(a, b) {
  return a + b;
}

function createUser() {
  return new User("John", 25);
}

function firstNumberIsOne(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 1) {
      return true;
    } else {
      return false;
    }
  }
}

function getLinkByLanguage(language) {
  switch (language.toLowerCase()) {
    case englishCode.toLowerCase():
      return "/about-us";
    case spanishCode.toLowerCase():
      return "/acerca-de";
    default:
      throw new Error("Language not supported");
  }
}

module.exports = {
  User,
  getLinkByLanguage,
  getTheAnswer,
  add,
  firstNumberIsOne,
  getAllFlavors,
  createUser,
};
