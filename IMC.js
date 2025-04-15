function evaluarIMC(peso, altura) {
    const imc = peso / (altura * altura);
    return imc;
}
module.exports.moduloIMC=evaluarIMC;
