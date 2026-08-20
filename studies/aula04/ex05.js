let contador = 1;
let soma = 0;

while (contador <= 10) {
    if (contador % 2 == 0) {
        soma += contador;
    }

    contador++;
}

console.log(soma);