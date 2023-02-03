const book = {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["historical prose", "adventure"],
    isPublic: true,
    rating: 8.38,
  };
  

  // Desestructuración anidada por propiedades
  const accessType = book.isPublic ? "público" : "privado";
  const message = `Libro ${book.title} autor ${book.author} con la valoración ${book.rating} se encuentra en ${accessType} acceso.`;

  console.log(message)


  // Desestructuración objeto
  const { title, author, isPublic, rating, coverImage } = book;
  console.log(coverImage); // undefined



