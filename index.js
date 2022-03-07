const reader = require("readline-sync"); //npm install readline-sync
const numerosDigitados = reader.question("Entre com os numeros, separados por virgula (exemplo: 1,5,3,4,2): ");
const diferencaDigitada = reader.question("Entre com a diferenca entre os numeros (exemplo: 2): ");
// console.log(`numerosDigitados: ${numerosDigitados}`);
// console.log(`diferencaDigitada: ${diferencaDigitada}`);
const numeros = numerosDigitados.split(',');
// console.log(`numeros: ${numeros}`);

var qtNumerosComDiferenca = 0;
for (let i = 0; i < numeros.length; i++) {
    var numero1 = numeros[i];
    // console.log(`numero1[${i}]: ${numero1}`);

    for (let j = i + 1; j < numeros.length; j++) {
        if (i != j) {
            var numero2 = numeros[j];
            // console.log(`numero2[${j}]: ${numero2}`);
            if (numero1 > numero2 ) {
                let diferenca = numero1 - numero2;
                if (diferenca == diferencaDigitada) {
                    qtNumerosComDiferenca++;
                    // console.log(`qtNumerosComDiferenca (maior): ${qtNumerosComDiferenca}`);                    
                }
            }
            if (numero1 < numero2 ) {
                let diferenca = numero2 - numero1;
                if (diferenca == diferencaDigitada) {
                    qtNumerosComDiferenca++;
                    // console.log(`qtNumerosComDiferenca (menor): ${qtNumerosComDiferenca}`);                    
                }
            }
        }
    }
}

console.log(`Quantidade de numeros com a diferenca desejada: ${qtNumerosComDiferenca}`);

// console.log('final do programa');
