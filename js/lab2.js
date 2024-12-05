function calc_task1() {
    
    let a = parseFloat(prompt("Введите длину ребра куба (вещественное число):"));

    if (isNaN(a) || a < 0) {

        alert("Введённое число некорректно!");
        return;

    } else {

        let v = a ** 3;
        let s = 6 * a ** 2;

        alert(`Объём куба: ${v.toFixed(3)}\nПлощадь поверхности куба: ${s.toFixed(3)}`);
    
    }
}

function calc_task2() {
    
    let a = parseFloat(prompt("Введите длину первого отрезка A (целое положительное число), большего из двух:"));
    let b = parseFloat(prompt("Введите длину второго отрезка B (целое положительное число), меньшего из двух:"));

    if (a <= 0 || b <= 0 || !Number.isInteger(a) || !Number.isInteger(b) || a <= b) {

        alert("Введённое(ые) число(а) некорректно(ы)!");
        return;

    } else {

        let result = a % b;

        alert(`Длина незанятой части отрезка A: ${result}`);

    }
}