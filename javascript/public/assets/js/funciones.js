const botonesDiv = document.getElementById(`botones`);
const resultadoDiv = document.getElementById(`resultado`);

document.body.style.width = "100%";

resultadoDiv.innerHTML = "Empezamos funciones hoy";
botonesDiv.innerHTML = `
    <button class="btn btn-primary" onclick="saludar()">Saludo</button>
    <button class="btn btn-primary" onclick="letraRepeat()">Letra Repetida</button>
    <button class="btn btn-primary" onclick="realizarSuma()">Suma</button>
`;

function letraRepeat() {
    let letra = prompt("Ingrese una letra");
    let veces = parseInt(prompt("Ingrese la cantidad"));
    resultadoDiv.innerHTML = "";
    for (let i = 1; i <= veces; i++) {
        resultadoDiv.innerHTML += letra;
    }   
}

function realizarSuma(){
    let num1 = parseInt(prompt("Ingrese primer numero"));
    let num2 = parseInt(prompt("Ingrese segundo numero"));
    let suma = num1 + num2;
    resultadoDiv.innerHTML = suma;
}
 
