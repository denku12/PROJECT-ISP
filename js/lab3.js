function check_task1() {

    let a = parseFloat(document.getElementById('inputA').value);
    let b = parseFloat(document.getElementById('inputB').value);
    let result_text = document.getElementById('result_task1');

    if (isNaN(a) || isNaN(b) || !Number.isInteger(a) || !Number.isInteger(b)) {

        result_text.textContent = "Ошибка: введите корректные целые числа.";
        result_text.style.color = 'red';

        return;

    }

    let result = (a >= 0 || b < -2) ? "TRUE" : "FALSE";

    result_text.textContent = `Результат: ${result}`;
    result_text.style.color = 'black';

}

function calc_task2() {

    let a = parseFloat(document.getElementById('inputX').value);
    let b = parseFloat(document.getElementById('inputY').value);
    let c = parseFloat(document.getElementById('inputZ').value);
    
    let positive_count = 0;
    let negative_count = 0;

    if (isNaN(a) || isNaN(b) || isNaN(c) || !Number.isInteger(a) || !Number.isInteger(b) || !Number.isInteger(c)) {

        document.getElementById('positiveCount').textContent = "Ошибка: введите корректные целые числа.";
        document.getElementById('negativeCount').textContent = "";
        return;

    }

    if (a > 0) positive_count++;
    else if (a < 0) negative_count++;

    if (b > 0) positive_count++;
    else if (b < 0) negative_count++;

    if (c > 0) positive_count++;
    else if (c < 0) negative_count++;

    document.getElementById('positiveCount').textContent = `Количество положительных чисел: ${positive_count}`;
    document.getElementById('negativeCount').textContent = `Количество отрицательных чисел: ${negative_count}`;

}

function calc_task3() {

    let x = parseFloat(document.getElementById("inputFunc").value);

    let a = 1.3;
    let b = 2.5;
    let result;

    if (x <= -2) {

        result = 2 * Math.pow(Math.cos(a * Math.pow(x, 2) - b), 2);

    } else if (x > 3) {

        result = 3 * Math.pow(x, 2) + b;

    } else if (x > -2 && x <= 3) {

        result = Math.sqrt(Math.pow(x, 2) + Math.exp(a * x));

    } else {

        result = "Неверный ввод";

    }

    document.getElementById("result_task3").textContent = `Значение y: ${result.toFixed(5)}`;

}

function calc_task4() {

    let a = 3.9;
    let b = 4.6;

    let x1 = -2;
    let x2 = 4;
    let x3 = 3;
    let result = '';
    
    switch (true) {

        case (x1 <= -2):
            y1 = 2 * Math.pow(Math.cos(a * Math.pow(x1, 2) - b), 2);
            break;

    }
    
    switch (true) {
        
        case (x2 > 3):
            y2 = 3 * Math.pow(x2, 2) + b;
            break;
        
    }
    
    switch (true) {
        
        case (x3 > -2 && x3 <= 3):
            y3 = Math.sqrt(Math.pow(x3, 2) + Math.exp(a * x3));
            break;
        
    }

    result += `Для x = -2, y = ${y1.toFixed(5)}<br>`;
    result += `Для x = 4, y = ${y2.toFixed(5)}<br>`;
    result += `Для x = 3, y = ${y3.toFixed(5)}<br>`;

    document.getElementById("result_task4").innerHTML = result;

}