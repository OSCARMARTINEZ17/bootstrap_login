// Calcular número par o impar

let numero = prompt("Ingrese un número para calcular si es par o impar:");
let resultado;

// Convertir a número
numero = parseInt(numero);

if (numero % 2 == 0) {
    resultado = "El número es par";
} else {
    resultado = "El número es impar";
}

// Mostrar resultado
alert(resultado);




//Este script pide al usuario que teclee una letra entre A, B, C, D. Si pulsa la letra A, B o D en mayúscula o en minúscula le dará el mensaje de que ha acertado, en caso contrario le dirá que se equivoco. con js utilizando estructura basics

let letra = prompt("Ingrese una letra (A, B, C o D)");

if (letra === "A" || letra === "a" ||
    letra === "B" || letra === "b" ||
    letra === "D" || letra === "d") {

    alert("¡Acertaste!");

} else {
    alert("Te equivocaste.");
}


//

let letra = prompt("Ingrese una letra (A, B, C o D)");
let resultado

if (letra == 'C' || letra == 'c') {
    resultado = "se equivoco"  
}

else {
    resultado = "acerto"
}   

alert(resultado)