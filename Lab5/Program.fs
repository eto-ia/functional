// Чистые функции для базовых операций
let add x y = x + y
let subtract x y = x - y
let multiply x y = x * y
let divide x y = 
    if y <> 0 then Some (x / y)
    else None

// Рекурсивная функция факториала
let rec factorial n =
    if n <= 1 then 1
    else n * factorial (n - 1)

// Каррирование: создаем функцию сложения с фиксированным первым аргументом
let add5 = add 5
let multiply10 = multiply 10

[<EntryPoint>]
let main argv =
    printfn "Сложение 3 + 7 = %d" (add 3 7)
    printfn "Разность 10 - 4 = %d" (subtract 10 4)
    printfn "Умножение 6 * 5 = %d" (multiply 6 5)

    match divide 20 4 with
    | Some result -> printfn "Деление 20 / 4 = %d" result
    | None -> printfn "Ошибка деления на 0"

    match divide 10 0 with
    | Some result -> printfn "Результат: %d" result
    | None -> printfn "Ошибка: деление на ноль"

    printfn "Факториал 5 = %d" (factorial 5)

    printfn "Функция add5 (5 + 8) = %d" (add5 8)
    printfn "Функция multiply10 (10 * 2) = %d" (multiply10 2)

    0
