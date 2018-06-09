//const s = 'Nhat Thanh';
//console.log(typeof s1);
//console.log(s.toUpperCase());

// const b = new String(123);
// console.log(typeof b);


// console.log(window);
// console.log(navigator.appVersion);


const book1 = {
  title: 'JavaScript Basic',
  author: 'JS Thanh',
  year: 1994,
  getSummary: function() {
    return `${this.title} is easy with ${this.author}
    was bord ${this.year}`;
  },
  getAuth: function() {
    return `Authentication is ${this.author}`;
  }
};

// console.log(book1.getSummary());
// console.log(Object.values(book1));
// console.log(Object.keys(book1));
// console.log(Object(book1));
