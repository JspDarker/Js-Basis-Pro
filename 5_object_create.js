// Object of Protos

const bookProtos = {
  getSummary: function() {
    return `Book is ${this.name} of ${this.author} was written
      ${this.year}
    `;
  },
  getAge: function() {
    const years = new Date().getFullYear()-this.year;
    return `${this.name} is ${years} years old`;
  }
};

// Create Object
// const book = Object.create(bookProtos);
// book.name = "Today JS you know";
// book.author = "Thanh Js";
// book.year = 2016;
// console.log(book.getSummary());

const book = Object.create(bookProtos,{
  name:   {value: 'Do You Know JS'},
  author: {value: 'ThanhJS'},
  year:   {value: 2015}
});
console.log(book);
