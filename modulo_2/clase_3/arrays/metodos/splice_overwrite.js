const languages = ["C", "C++", "Java", "JavaScript"];

// Replace the element with index 1 with a new one
languages.splice(1, 1, "Python");
console.log(languages); // ["C", "Python", "Java", "JavaScript"]

// Replace one element (with index 2) with several ones
languages.splice(2, 1, "C#", "Swift", "Go");
console.log(languages); // ["C", "Python", "C#", "Swift", "Go", "JavaScript"]