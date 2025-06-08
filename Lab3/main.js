var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Функция: фильтрует числа, кратные заданному значению
var filterMultiples = function (arr, divisor) {
    return arr.filter(function (num) { return num % divisor === 0; });
};
// Функция: объединяет массив строк через заданный разделитель
var joinStrings = function (arr, separator) {
    return arr.join(separator);
};
// Функция: сортирует массив объектов по значению свойства
var sortByProperty = function (arr, key) {
    return __spreadArray([], arr, true).sort(function (a, b) {
        var valA = a[key];
        var valB = b[key];
        if (typeof valA === "number" && typeof valB === "number") {
            return valA - valB;
        }
        if (typeof valA === "string" && typeof valB === "string") {
            return valA.localeCompare(valB);
        }
        return 0;
    });
};
// Функция: возвращает новую функцию, логирующую входные данные и результат
var withLogging = function (fn) {
    return (function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log("Вход:", args);
        var result = fn.apply(void 0, args);
        console.log("Выход:", result);
        return result;
    });
};
// Примеры использования
// filterMultiples
var numbers = [3, 5, 10, 15, 20, 25];
var multiplesOf5 = filterMultiples(numbers, 5);
console.log("Кратные 5:", multiplesOf5);
// joinStrings
var words = ["Привет", "мир", "TypeScript"];
var sentence = joinStrings(words, " ");
console.log("Объединённая строка:", sentence);
var users = [
    { name: "Анна", age: 25 },
    { name: "Борис", age: 20 },
    { name: "Вика", age: 30 }
];
var sortedByAge = sortByProperty(users, "age");
console.log("Сортировка по возрасту:", sortedByAge);
// withLogging
var add = function (a, b) { return a + b; };
var loggedAdd = withLogging(add);
loggedAdd(5, 7);
