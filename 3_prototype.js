function Book(name, author, year) {
  this.name = name+" 123";
  this.author = author;
  this.year = year;

  this.getName = function() {
    return `Book is name ${this.name}`;
  };
}

const big = new Book('Romance Book', 'Thanh JStorm',2014);
//console.log(big.getName());

Book.prototype.getAuthor = function() {
  return `this is author from Prototype add outsite function Book : ${this.author}`;
};//console.log(big.getAuthor()); // OKE do thuoc class Book.
//console.log(getAuthor());// not defined

// get Age
Book.prototype.getAge = function() {
  const years = new Date().getFullYear()-this.year;
  return `${this.name} is ${years} years old`;
};//console.log(big.getAge());

// Revise / change year
Book.prototype.revise = function (newYear) {
  this.year = newYear;
  this.revised = true;
};
console.log(big);
console.log(big.revise(1234));
console.log(big);
