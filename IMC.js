function evaluarIMC(peso, altura) {
    const imc = peso / (altura * altura);
    console.log("El valor de IMC es: " + imc.toFixed(2));

    if (imc < 18.5) {
        console.log("Peso insuficiente");
    } else if (imc < 25) {
        console.log("Saludable");
    } else if (imc < 30) {
        console.log("Sobrepeso");
    } else if (imc < 40) {
        console.log("Obesidad");
    } else {
        console.log("Obesidad extrema");
    }
}
evaluarIMC(80, 1.55);
