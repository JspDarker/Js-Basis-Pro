// Constructor
function Book(name, author, year){
  this.name = name;
  this.author = author;
  this.year = year;
}

// Prototype
Book.prototype.getSummary = function() {
  return `Book is ${this.name} of ${this.author} was written
    ${this.year}
  `;
};

//Magazine Constructor
function Magazine(name, author, year, month){
  Book.call(this,name,author, year);
  this.month = month;
}

// When _inheritence_kethua -> can using method of Book
Magazine.prototype = Object.create(Book.prototype);

const maga = new Magazine('Steve Jobs Book','Dao Nhat Thanh',2016,'May');
console.log(maga); // not use method getSummary ->constructor of Book(name,author,year)
console.log(maga.getSummary());

// Use Magazine Constructor ->set constructor Magazine Global
Magazine.prototype.constructor = Magazine;
console.log(maga);
