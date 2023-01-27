
// addCourse(name) - añade un curso al final de la colección
// removeCourse(name) - elimina un curso de la colección
// updateCourse(oldName, newName) - cambia el nombre por uno nuevo

const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

addCourse('Express');
console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
addCourse('CSS'); // 'Usted ya tiene un curso como este'

removeCourse('React');
console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
removeCourse('Vue'); // 'No se ha encontrado ningún curso con este nombre'

updateCourse('Express', 'NestJS');
console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']