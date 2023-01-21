const scores = [1, 2, 3, 4, 5];

// Remove three array elements, starting with the first one (index 0)
const deletedScores = scores.splice(0, 3);

// The scores array now contains two elements
console.log(scores); // [4, 5]

// The deletedScores array contains three deleted elements
console.log(deletedScores); // [1, 2, 3]