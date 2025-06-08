open System

// Чистые функции для математических операций
let add x y = x + y
let subtract x y = x - y
let multiply x y = x * y
let divide x y = 
    if y <> 0.0 then Some (x / y) 
    else None
let power x y = Math.Pow(x, y)
let sqrt x = 
    if x >= 0.0 then Some (Math.Sqrt x)
    else None
let sinDeg x = Math.Sin(x * Math.PI / 180.0)
let cosDeg x = Math.Cos(x * Math.PI / 180.0)
let tanDeg x = Math.Tan(x * Math.PI / 180.0)

// Функция высшего порядка
let apply op x y = op x y

let printResult result =
    match result with
    | Some value -> printfn "Результат: %f" value
    | None -> printfn "Ошибка вычисления"

let menu () =
    printfn "\nВыберите операцию:"
    printfn "1 - Сложение"
    printfn "2 - Вычитание"
    printfn "3 - Умножение"
    printfn "4 - Деление"
    printfn "5 - Возведение в степень"
    printfn "6 - Квадратный корень"
    printfn "7 - Синус (в градусах)"
    printfn "8 - Косинус (в градусах)"
    printfn "9 - Тангенс (в градусах)"
    printf "Введите номер операции: "
    Console.ReadLine()

let readFloat prompt =
    printf "%s" prompt
    Console.ReadLine() |> float

[<EntryPoint>]
let main argv =
    let rec loop () =
        match menu () with
        | "1" ->
            let x = readFloat "Введите первое число: "
            let y = readFloat "Введите второе число: "
            printfn "Результат: %f" (apply add x y)
        | "2" ->
            let x = readFloat "Введите первое число: "
            let y = readFloat "Введите второе число: "
            printfn "Результат: %f" (apply subtract x y)
        | "3" ->
            let x = readFloat "Введите первое число: "
            let y = readFloat "Введите второе число: "
            printfn "Результат: %f" (apply multiply x y)
        | "4" ->
            let x = readFloat "Введите делимое: "
            let y = readFloat "Введите делитель: "
            divide x y |> printResult
        | "5" ->
            let x = readFloat "Введите основание: "
            let y = readFloat "Введите степень: "
            printfn "Результат: %f" (power x y)
        | "6" ->
            let x = readFloat "Введите число: "
            sqrt x |> printResult
        | "7" ->
            let x = readFloat "Введите угол в градусах: "
            printfn "Синус: %f" (sinDeg x)
        | "8" ->
            let x = readFloat "Введите угол в градусах: "
            printfn "Косинус: %f" (cosDeg x)
        | "9" ->
            let x = readFloat "Введите угол в градусах: "
            printfn "Тангенс: %f" (tanDeg x)
        | _ ->
            printfn "Неизвестная операция"

        printf "\nПродолжить? (y/n): "
        if Console.ReadLine().ToLower() = "y" then loop () else printfn "Выход..."
    loop ()
    0
