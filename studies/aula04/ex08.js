let contador = 1;
let quantidade_pares = 0;

while (contador <= 20) {

    if (contador % 2 == 0) {
        quantidade_pares++;
    }

    contador++;
}

console.log("Quantidade de pares: ", quantidade_pares);