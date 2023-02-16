const book = {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["historical prose", "adventure"],
    isPublic: true,
    rating: 8.38,
    coverImage: 'url://image.jpg'

  };
  



  // Desestructuración objeto
  const { title, author, isPublic, rating, coverImage:imagem, longitud = title.length } = book;

  imagem()
  console.log(longitud); // undefined



