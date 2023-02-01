const book = {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  };
  const keys = Object.keys(book);
  console.log(keys); // ['title', 'author', 'rating']
  
  const values = Object.values(book);
  console.log(values); // ['The Last Kingdom', 'Bernard Cornwell', 8.38]
  
  const entries = Object.entries(book);
  console.log(entries);
  // [["title", "The Last Kingdom"], ["author", "Bernard Cornwell"], ["rating", 8.38]]