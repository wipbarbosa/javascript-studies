let contador = 1
let pares = 0
let impares = 0

while (contador <= 30){
    if(contador % 2 == 0){
        pares++
    }
    if(contador % 2 == 1){
        impares++
    }
    contador++
}
console.log("Pares: ", pares, "Impares: ", impares)