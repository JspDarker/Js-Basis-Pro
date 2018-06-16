
const book = {
  name: 'INTime Book',
  author: "TodayJs",
  year: 2001,
  getBookName: function() {
    return `This is ${this.name} was author ${this.author} in year ${this.year}`;
  },
  setBook: function(name, author, year) {
    this.name = name;
    this.author = author;
    this.year = year;
  }
};
let faker = document.querySelector('#demo');
console.log(faker.innerHTML='this is under console.log');
faker.addEventListener('click',function() {
  alert(faker.innerHTML);
});
console.log(window);

// const bookMac = book.getBookName();
// console.log(bookMac);



// console.log(book);
// console.log(book.getBookName());
// console.log(typeof book.setBook('Gaden Book', 'TomJS', 123));
// console.log(book);
// console.log(book.getBookName());
