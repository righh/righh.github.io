function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    if (b === 0) {
        return "No se puede dividir por 0";
    }
    return a / b;
}
// Selección de elementos del DOM
var value1Input = document.getElementById("value1");
var value2Input = document.getElementById("value2");
var resultSpan = document.getElementById("result");
var buttons = document.querySelectorAll(".buttons-container button");
// Manejo de operaciones
function handleOperation(event) {
    var target = event.target;
    var operation = target.dataset.operation;
    if (!operation)
        return;
    var value1 = parseFloat(value1Input.value);
    var value2 = parseFloat(value2Input.value);
    if (isNaN(value1) || isNaN(value2)) {
        resultSpan.textContent = "Por favor ingresa valores válidos.";
        return;
    }
    var result;
    switch (operation) {
        case "+":
            result = add(value1, value2);
            break;
        case "-":
            result = subtract(value1, value2);
            break;
        case "*":
            result = multiply(value1, value2);
            break;
        case "/":
            result = divide(value1, value2);
            break;
        default:
            result = "Operación no válida.";
    }
    resultSpan.textContent = result.toString();
}
// Agregar eventos a los botones
buttons.forEach(function (button) {
    button.addEventListener("click", handleOperation);
});
