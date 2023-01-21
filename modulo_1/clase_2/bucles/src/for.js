const number = 10;

for (let i = 0; i < number; i++) {
  if (i % 2 === 0) {
    continue;
  }

  if (i % 2 === 0) {
    break;
  }

  console.log("Impares i: ", i); // 1, 3, 5, 7, 9
}
