function calcularIMC(peso, altura) {
         const imc = peso / (altura*altura);
             return imc;
    }
    undefined
    const pesoUsuario= 80;
    const alturaUsuario= 1.55;
    const imcUsuario = calcularIMC(pesoUsuario, alturaUsuario);

    //imcUsuario.toFixed(2);
    console.log("El valor de IMC es:" + imcUsuario.toFixed(2));