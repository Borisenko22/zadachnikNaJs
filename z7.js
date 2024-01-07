// Задача 7: Даны три целых числа.
// Найти количество положительных
// и количество отрицательных чисел в исходном наборе

let numbers = [-1,-2,3]

let positiveCount = numbers.filter(num => num> 0).length;
let negativeCount = numbers.filter(num => num< 0).length;

console.log(`Количество положительных чисел: ${positiveCount}`);
console.log(`Количество отрицательных чисел: ${negativeCount}`);
