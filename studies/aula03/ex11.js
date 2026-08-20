let idade = 20;
let temCarteira = true;
let bloqueado = false;

if (idade >= 18 && (temCarteira && !bloqueado)){
    console.log("Pode dirigir")
} else{
    console.log("Não pode dirigir")
}