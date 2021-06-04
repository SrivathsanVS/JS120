function createBook(title, author, read=false) {
  return {
    Title: title,
    Author: author,
    read: read,
    readBook() {
      this.read = true;
    },
    getDescription() {
      let string1 = `${title} was written by ${author}.`
      let string2 = (this.read) ? 'I have read it.' : "I haven't read it.";
      console.log(string1 + ' ' + string2);
    },
  };
}

let b = createBook('Mythos', 'Stephen Fry');
let c = 10;
