const modulo= require("./IMC.js")

const pesoUsuario= 80;
const alturaUsuario= 1.55;

const imcUsuario = modulo.moduloIMC(pesoUsuario, alturaUsuario);

if (imcUsuario < 18.5) {
    console.log("Peso insuficiente");
} else if (imcUsuario < 25) {
    console.log("Saludable");
} else if (imcUsuario < 30) {
    console.log("Sobrepeso");
} else if (imcUsuario < 40) {
    console.log("Obesidad");
} else {
    console.log("Obesidad extrema");
}
console.log("El valor de IMC es: " + imcUsuario.toFixed(2));