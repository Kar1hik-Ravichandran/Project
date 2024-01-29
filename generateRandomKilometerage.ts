function generateRandomKilometerage() {
  // Assuming a reasonable range for car kilometerage (e.g., 0 to 321,869 kilometers)
  const minKilometerage = 10;
  const maxKilometerage = 50;

  // Generate a random kilometerage within the specified range
  const randomKilometerage = Math.floor(Math.random() * (maxKilometerage - minKilometerage + 1)) + minKilometerage;

  return randomKilometerage;
}

// Example usage
const carKilometerage = generateRandomKilometerage();
console.log(`Car Kilometerage: ${carKilometerage} kilometers`);
