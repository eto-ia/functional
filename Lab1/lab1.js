// 1. Функция для фильтрации чётных чисел
const filterEvenNumbers = (arr) => arr.filter(num => num % 2 === 0);

// 2. Функция для возведения чисел в квадрат
const squareNumbers = (arr) => arr.map(num => num ** 2);

// 3. Функция для фильтрации объектов по наличию определённого свойства
const filterObjectsByProperty = (arr, prop) => arr.filter(obj => obj.hasOwnProperty(prop));

// 4. Функция для вычисления суммы чисел
const sumNumbers = (arr) => arr.reduce((acc, num) => acc + num, 0);

// 5. Функция высшего порядка, применяющая функцию к каждому элементу массива
const applyFunctionToArray = (func, arr) => arr.map(func);

// Примерные данные для демонстрации работы
const numbers = [1, 2, 3, 4, 5, 6];
const objects = [
  { value: 10 },
  { value: 20 },
  { amount: 30 },
  { value: 40 }
];
const threshold = 15;

// Найти сумму квадратов всех чётных чисел
const evenNumbers = filterEvenNumbers(numbers);
const squaredEvenNumbers = squareNumbers(evenNumbers);
const sumOfSquares = sumNumbers(squaredEvenNumbers);
console.log("Сумма квадратов чётных чисел:", sumOfSquares);

// Найти среднее арифметическое всех чисел
const filteredByValue = filterObjectsByProperty(objects, "value");
const valuesAboveThreshold = filteredByValue
  .map(obj => obj.value)
  .filter(val => val > threshold);
const averageAboveThreshold = valuesAboveThreshold.length > 0
  ? sumNumbers(valuesAboveThreshold) / valuesAboveThreshold.length
  : 0;
console.log(`Среднее значение "value" больше ${threshold}:`, averageAboveThreshold);

// Использование функции высшего порядка
const increment = x => x + 1;
const incrementedNumbers = applyFunctionToArray(increment, numbers);
console.log("Массив после применения функции increment:", incrementedNumbers);
