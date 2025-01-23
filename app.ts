function add(a: number, b: number): number {
    return a + b;
  }
  
  function subtract(a: number, b: number): number {
    return a - b;
  }
  
  function multiply(a: number, b: number): number {
    return a * b;
  }
  
  function divide(a: number, b: number): number | string {
    if (b === 0) {
      return "No se puede dividir por 0";
    }
    return a / b;
  }
  
  // Selección de elementos del DOM
  const value1Input = document.getElementById("value1") as HTMLInputElement;
  const value2Input = document.getElementById("value2") as HTMLInputElement;
  const resultSpan = document.getElementById("result") as HTMLElement;
  const buttons = document.querySelectorAll<HTMLButtonElement>(".buttons-container button");
  
  // Manejo de operaciones
  function handleOperation(event: Event): void {
    const target = event.target as HTMLButtonElement;
    const operation = target.dataset.operation;
  
    if (!operation) return;
  
    const value1 = parseFloat(value1Input.value);
    const value2 = parseFloat(value2Input.value);
  
    if (isNaN(value1) || isNaN(value2)) {
      resultSpan.textContent = "Por favor ingresa valores válidos.";
      return;
    }
  
    let result: number | string;
  
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
  buttons.forEach((button) => {
    button.addEventListener("click", handleOperation);
  });