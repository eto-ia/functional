// Функция: фильтрует числа, кратные заданному значению
const filterMultiples = (arr: number[], divisor: number): number[] =>
  arr.filter((num: number) => num % divisor === 0);

// Функция: объединяет массив строк через заданный разделитель
const joinStrings = (arr: string[], separator: string): string =>
  arr.join(separator);

// Функция: сортирует массив объектов по значению свойства
const sortByProperty = <T>(arr: T[], key: keyof T): T[] =>
  [...arr].sort((a, b) => {
    const valA = a[key];
    const valB = b[key];

    if (typeof valA === "number" && typeof valB === "number") {
      return valA - valB;
    }
    if (typeof valA === "string" && typeof valB === "string") {
      return valA.localeCompare(valB);
    }
    return 0;
  });

// Функция: возвращает новую функцию, логирующую входные данные и результат
const withLogging = <T extends (...args: any[]) => any>(fn: T): T => {
  return ((...args: Parameters<T>): ReturnType<T> => {
    console.log("Вход:", args);
    const result = fn(...args);
    console.log("Выход:", result);
    return result;
  }) as T;
};

// Примеры использования

// filterMultiples
const numbers = [3, 5, 10, 15, 20, 25];
const multiplesOf5 = filterMultiples(numbers, 5);
console.log("Кратные 5:", multiplesOf5);

// joinStrings
const words = ["Привет", "мир", "TypeScript"];
const sentence = joinStrings(words, " ");
console.log("Объединённая строка:", sentence);

// sortByProperty
type User = { name: string; age: number };
const users: User[] = [
  { name: "Анна", age: 25 },
  { name: "Борис", age: 20 },
  { name: "Вика", age: 30 }
];

const sortedByAge = sortByProperty(users, "age");
console.log("Сортировка по возрасту:", sortedByAge);

// withLogging
const add = (a: number, b: number): number => a + b;
const loggedAdd = withLogging(add);
loggedAdd(5, 7);
