const sumEvenNumbers = (numbers) => {
    let sum = 0;
    numbers.forEach(number => {
        if(number % 2 === 0) sum += number;
    });
    return sum;
}

// Example usage:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = sumEvenNumbers(numbers);
console.log(result); // Output: 30