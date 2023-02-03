 function doStuffWithBook({
    title,
    numberOfPages,
    downloads,
    rating,
    isPublic,
  }) {
    console.log(title);
    console.log(numberOfPages);
    // Y así sucesivamente.
  }
  
 

  //Llamado con pattern
  doStuffWithBook({
    title: "The Last Kingdom",
    numberOfPages: 736,
    downloads: 10283,
    rating: 8.38,
    isPublic: true,
  });
  

  //ejercicio

  let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };

  function topSalary(salaries) {
    let maxSalary = 0;
    let maxName = null;
     for(const [name, salary] of Object.entries(salaries)) {
      if (maxSalary < salary) {
        maxSalary = salary;
        maxName = name;
         }
    }
     return maxName;
  }

  doStuffWithBook({
    title:"juan tenorio",

  })