/*
Mini-proyecto: Calculadora en el navegador
Crea un archivo index.html que cargue un calculadora.js. Al abrir la página en el navegador, el programa pregunta los datos con ventanas emergentes (prompt) y muestra el resultado en la consola del navegador (F12 → pestaña Consola) o con alert.
Requisitos mínimos:
    - Pedir dos números y una operación (+, -, *, /).
    - Mostrar el resultado con un mensaje claro, por ejemplo: 8 + 2 = 10.
    - Validar la entrada: si no es un número, avisar y volver a preguntar.
    - No permitir la división entre cero (mostrar un mensaje de error).
    - Al terminar, preguntar si quiere hacer otra operación.
*/
/*
Qué practicas: 
    - Variables y tipos (el prompt devuelve siempre texto)
    - Operadores y condicionales (if/else o switch)
    - Bucles (repetir hasta que el usuario diga que no)
    - Funciones (una por operación, otra para validar)
*/
/*
Directrices:
    - Estructura mínima del HTML: una página con una etiqueta <script src="calculadora.js"></script>. Nada más.
    - Lectura de datos: mira prompt() en MDN. Qué devuelve si el usuario cancela es parte del reto.
    - Cuidado con los tipos: convierte con Number() y comprueba con isNaN. Prueba qué pasa con "5" + 2 frente a Number("5") + 2.
    - Separa la lógica: cada operación en una función que reciba dos números y devuelva el resultado, sin mostrar nada dentro.
    - Ve por pasos: 1) una operación con números fijos, 2) entrada con prompt, 3) validación, 4) bucle.
    - Casos raros para probar: negativos, decimales, letras, vacío, cancelar, dividir entre 0.
*/
/*
Extras (opcionales):

    - Añadir potencia (**) y resto (%).
    - Guardar un historial en un array y mostrarlo al salir.
Entrega:
    - index.html y calculadora.js en un repositorio de GitHub.
    - README.md en inglés con qué hace y cómo abrirlo.
    - Commits pequeños, uno por funcionalidad.

*/

var resultado=NaN;


// Validation of values
while(isNaN(resultado)){
    alert("You must enter numbers as values and one of this operations digits ( + , - , * , / )");
    // We enter the diferents values using the function window.prompt
    var num1=prompt("Introduce the first digit");
    var operacion=prompt("Introduce the operacion");
    var num2=prompt("Introduce the second digit");
    num2Convert=Number(num2);
    num1Convert=Number(num1);
    resultado=num1Convert+num2Convert;
}

// Operations
while (operacion != "+" || operacion !="-" || operacion != "*" || operacion!="/"){
    switch (operacion){
        case "+": 
            resultado=num1Convert + num2Convert;
            if(isNaN(resultado)){
                console.log("DYou must enter numbers as values.");
            }else{
                console.log("The result of "+ num1Convert + " + "+ num2Convert + " = "+resultado);
            }
            
        break; 

        case "-": 
            resultado=num1Convert - num2Convert;
            if(isNaN(resultado)){
                console.log("Debes introducir numeros como valores");
            }else{
                console.log("The result of "+ num1Convert + " - "+ num2Convert + " = "+resultado);
            }
            
        break; 

        case "*":
            resultado=num1Convert*num2Convert;
            if(isNaN(resultado)){
                console.log("You must enter numbers as values.");
            }else{
                console.log("The result of "+ num1Convert + " x "+ num2Convert + " = "+resultado);
            }
            
        break;

        case "/":
            if(num2Convert == 0){
                console.log("ERROR (Cannot divide a number by 0)");
            }else{
                resultado=num1Convert/num2Convert;
                console.log("The result of "+ num1Convert + " / "+ num2Convert + " = "+resultado);
            }
            
        break;

        default :
            alert("Wrong operation symbol, please use one of this: + , - , * , /");
            num1=prompt("Introduce the first digit");
            operacion=prompt("Introduce the operacion");
            num2=prompt("Introduce the second digit");
            num2Convert=Number(num2);
            num1Convert=Number(num1);
            resultado=num1Convert+num2Convert;
        break;
    }
}