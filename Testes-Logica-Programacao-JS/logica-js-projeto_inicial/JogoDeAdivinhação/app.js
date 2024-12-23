alert('Boas Vindas ao jogo do número secreto');
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1

// enquanto o chute não for igual ao n.s 
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um numero entre 1 e ${numeroMaximo}`);
    // se chute for igual ao número secreto
    if (numeroSecreto == chute ){
        break;
    }  else {
            if (chute > numeroSecreto ) {
            alert(`O número secreto é menor que o seu ${chute}`);
        } else {
            alert(`O número secreto é maior que o seu ${chute}`);
        } 
        //tentativas = tentativas + 1; 
        tentativas++; //atribui 1
    } 

}
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Dale! tu acertou o Numero Secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa} `);

// if (tentativas > 1)  {
//     alert(`Dale! tu acertou o Numero Secreto ${numeroSecreto} com ${tentativas} tentativas`);
// } else {
//     alert(`Dale! tu acertou o Numero Secreto ${numeroSecreto} com ${tentativas} tentativa`);
// }