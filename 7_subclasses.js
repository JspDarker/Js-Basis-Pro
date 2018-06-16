class BookPro
{

  constructor(name, author, year)
  {
    this.name = name;
    this.author = author;
    this.year = year;
  }

  getSummary()
  {
    return `Book is ${this.name} of ${this.author} was written
      ${this.year}
    `;
  }

  getAge()
  {
    const years = new Date().getFullYear()-this.year;
    return `${this.name} is ${years} years old`;
  }

  revise(newYear)
  {
    this.year = newYear;
    this.revised = true;
  }

  // tinh bao mat cua class in JS
  static topBook() { // static only thuoc ve BookPro
    return 'Do something';
  }

}

// Magazine SubClasses
class ChildBook extends BookPro
{
  constructor(name, author, year, month) {
    super(name,author,year);
    this.month = month;
  }
  hasChild() {
    return this.month;
  }

}
// Instentiate ChildBook
const childbook = new ChildBook('PHP Laravel', 'Thanh JSP', 2016, "May");

// use global constructor of Parent is BookPro
//ChildBook.prototype.constructor = BookPro;
console.log(childbook);
