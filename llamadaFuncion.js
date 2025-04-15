const modulo= require("./calcularIMC.js")

const pesoUsuario= 80;
const alturaUsuario= 1.55;

const imcUsuario = modulo.moduloCalculaIMC(pesoUsuario, alturaUsuario);

//imcUsuario.toFixed(2);
console.log("El valor de IMC es:" + imcUsuario.toFixed(2));