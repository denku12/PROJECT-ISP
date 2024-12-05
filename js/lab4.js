function calc_task1() {

    let n = parseInt(document.getElementById('n').value);
    var numbers = document.getElementById('numbers').value;
    var numbers = numbers.split(';').map(num => parseFloat(num.trim()));
    let result_text = "Дробные части чисел: ";
    let product = 1;

    if (numbers.length !== n) {

        document.getElementById('result_task1').textContent = "Количество чисел не совпадает с N!";
        return;

    }

    for (let i = 0; i < n; i++) {

        if (isNaN(numbers[i]) || numbers[i] <= 0) {

            document.getElementById('result_task2').textContent = "Ошибка: все числа должны быть положительными!";
            return;

        }

        let fractional = numbers[i] - Math.floor(numbers[i]);
        result_text += fractional.toFixed(4) + " ";
        product *= fractional;

    }

    result_text += "\nПроизведение дробных частей: " + product.toFixed(4);
    document.getElementById('result_task1').textContent = result_text;

}

function calc_task2() {
    
    let price = parseFloat(document.getElementById("price").value);

    if (isNaN(price) || price <= 0) {

        document.getElementById("result_task2").innerHTML = "Пожалуйста, введите корректную цену.";
        return;

    }

    var result_text = "<h4>Стоимость конфет:</h4>";

    for (var i = 1; i <= 10; i++) {

        var cost = (i * 0.1 * price).toFixed(3);
        result_text += `<p>Стоимость ${(i * 0.1).toFixed(1)} кг: ${cost} руб.</p>`;

    }
    
    document.getElementById("result_task2").innerHTML = result_text;

}