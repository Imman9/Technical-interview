function capitalizeWords(input) {
  return input
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

console.log(capitalizeWords("hi"));
console.log(capitalizeWords("my name is emmanuel"));
