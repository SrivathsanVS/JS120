function createBook(title, author, read=false) {
  return {
    title: title,
    author: author,
    read: read,
    readBook() {
      this.read = 1;
    },
    getDescription() {
      let s1 = `${this.title} was written by ${this.author}. `;
      let s2 = (this.read) ? 'I have': "I haven't";
      s2 += ' read it';
      console.log(s1 + s2);
    }
  }
}
