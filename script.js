// Referencia al elemento de la pantalla
let display = document.getElementById("display");

function appendNumber(number) {
  if (display.innerText === "0") {
    display.innerText = number; // Si la pantalla muestra solo "0", reemplázalo con el número ingresado
  } else {
    display.innerText += number; // Agrega el número al final del contenido actual
  }
}

function appendOperator(operator) {
  const lastChar = display.innerText.slice(-1);
  // Solo agrega el operador si no hay ya uno al final
  if (!"+-*/%".includes(lastChar)) {
    display.innerText += operator;
  }
}
/**
 * Limpia completamente la pantalla, reiniciándola a "0".
 */
function clearDisplay() {
  display.innerText = "0";
}
/**
 * Borra el último carácter ingresado.
 */
function deleteLast() {
  display.innerText = display.innerText.slice(0, -1) || "0";
}
/**
 * Calcula el resultado de la operación actual y lo muestra en la pantalla.
 */
function calculateResult() {
  try {
    // Reemplaza símbolos visuales (×, −) con operadores válidos (*, -)
    display.innerText = eval(
      display.innerText.replace("×", "*").replace("−", "-")
    );
  } catch {
    // Si ocurre un error (como una operación inválida), muestra "Error"
    display.innerText = "Error";
  }
}
