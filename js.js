// String Manipulation Functions

function reverseString(str) {
    return str.split('').reverse().join('');
}

function countCharacters(str) {
    return str.length;
}

function capitalizeWords(sentence) {
    return sentence.split(' ').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    ).join(' ');
}

// Array Functions

function findMaximum(arr) {
    return Math.max(...arr);
}

function findMinimum(arr) {
    return Math.min(...arr);
}

function sumOfArray(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}

function filterArray(arr, condition) {
    return arr.filter(condition);
}

// Mathematical Functions

function factorial(n) {
    if (n < 0) return undefined; // Factorial for negative numbers doesn't exist
    if (n === 0) return 1; // Base case
    return n * factorial(n - 1);
}

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function fibonacci(n) {
    const fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib.slice(0, n);
}

// Execute Functions and Display Results
document.getElementById('reverse-result').textContent = reverseString("hello"); // "ahla"
document.getElementById('count-result').textContent = countCharacters("hello"); // 5
document.getElementById('capitalize-result').textContent = capitalizeWords("hello world"); // "Hello World"
document.getElementById('max-result').textContent = findMaximum([1, 2, 3, 4, 5]); // 5
document.getElementById('min-result').textContent = findMinimum([1, 2, 3, 4, 5]); // 1
document.getElementById('sum-result').textContent = sumOfArray([1, 2, 3, 4, 5]); // 15
document.getElementById('filter-result').textContent = filterArray([1, 2, 3, 4, 5], x => x > 2); // [3, 4, 5]
document.getElementById('factorial-result').textContent = factorial(5); // 120
document.getElementById('prime-result').textContent = isPrime(7); // true
document.getElementById('fibonacci-result').textContent = fibonacci(5).join(', '); // "0, 1, 1, 2, 3"
