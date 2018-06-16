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

  static topBook() { // static only thuoc ve BookPro
    return 'Do something';
  }

}

const book1 = new BookPro('Coffee INTime','ThanhJS',2015);
console.log(book1);
//console.log(book1.topBook());// error
console.log(BookPro.topBook());
