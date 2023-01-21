const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
const threshold = 15;

// For numbers less than the threshold value, continue is triggered, the body execution stops
// and control is passed to the next iteration.
for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] < threshold) {
    continue;
  }

  console.log(`Number is greater than ${threshold}: ${numbers[i]}`); // 18, 29, 34
}

