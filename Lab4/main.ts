// Тип функции операции
type BinaryOperation = (a: number, b: number) => number;
type UnaryOperation = (a: number) => number;

// Чистые функции для операций
const add: BinaryOperation = (a, b) => a + b;
const subtract: BinaryOperation = (a, b) => a - b;
const multiply: BinaryOperation = (a, b) => a * b;
const divide: BinaryOperation = (a, b) => b !== 0 ? a / b : NaN;
const power: BinaryOperation = (a, b) => Math.pow(a, b);
const sqrt: UnaryOperation = (a) => a >= 0 ? Math.sqrt(a) : NaN;

// Функция высшего порядка для логирования
const withLogging = <T extends (...args: any[]) => any>(fn: T): T => {
  return ((...args: Parameters<T>): ReturnType<T> => {
    console.log("Вход:", args);
    const result = fn(...args);
    console.log("Выход:", result);
    return result;
  }) as T;
};

// Обработчик клика
const handleClick = (op: string) => {
  const num1 = parseFloat((document.getElementById("num1") as HTMLInputElement).value);
  const num2 = parseFloat((document.getElementById("num2") as HTMLInputElement).value);
  const resultDiv = document.getElementById("result") as HTMLDivElement;

  let result: number;

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

  resultDiv.textContent = `Результат: ${isNaN(result) ? "Ошибка" : result}`;
};

// Навешивание событий
const buttons = document.querySelectorAll("button[data-op]");
buttons.forEach((btn) => {
  const op = btn.getAttribute("data-op");
  if (op) {
    btn.addEventListener("click", () => handleClick(op));
  }
});
