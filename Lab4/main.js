// Чистые функции для операций
var add = function (a, b) { return a + b; };
var subtract = function (a, b) { return a - b; };
var multiply = function (a, b) { return a * b; };
var divide = function (a, b) { return b !== 0 ? a / b : NaN; };
var power = function (a, b) { return Math.pow(a, b); };
var sqrt = function (a) { return a >= 0 ? Math.sqrt(a) : NaN; };
// Функция высшего порядка для логирования
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
// Обработчик клика
var handleClick = function (op) {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var resultDiv = document.getElementById("result");
    var result;
    switch (op) {
        case "add":
            result = withLogging(add)(num1, num2);
            break;
        case "sub":
            result = withLogging(subtract)(num1, num2);
            break;
        case "mul":
            result = withLogging(multiply)(num1, num2);
            break;
        case "div":
            result = withLogging(divide)(num1, num2);
            break;
        case "pow":
            result = withLogging(power)(num1, num2);
            break;
        case "sqrt":
            result = withLogging(sqrt)(num1);
            break;
        default:
            result = NaN;
    }
    resultDiv.textContent = "\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442: ".concat(isNaN(result) ? "Ошибка" : result);
};
// Навешивание событий
var buttons = document.querySelectorAll("button[data-op]");
buttons.forEach(function (btn) {
    var op = btn.getAttribute("data-op");
    if (op) {
        btn.addEventListener("click", function () { return handleClick(op); });
    }
});
