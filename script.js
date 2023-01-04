const botao = document.querySelectorAll(".button");
const visor = document.querySelector(".screen");
const clear = document.querySelector(".button-clear");
const igual = document.querySelector(".button-equal");


let limite = 0;
let limite2 = 0;

number = '';
numbers = new Array;
sinais = new Array;

for(i = 0; i<botao.length; i++)
{
    botao[i].addEventListener('click', (e) => {
        let valor = e.target.innerText;
        if(valor != 'c' || valor != '='){
    
            if(valor == '-' || valor == 'x' || valor == '+' || valor == '÷'){
                limite = -1;
            }
            if(limite<8 && limite2<26){
                visor.innerText += valor;
                limite++;
                limite2++;
            }
        }
    })
}


clear.addEventListener('click', () => {
    visor.innerText = '';
    limite = 0;
    limite2 = 0;
})

igual.addEventListener('click', () => {
    for(i=0; i<visor.innerText.length; i++){
        if(!(visor.innerText[i] == '-' || visor.innerText[i] == 'x' || visor.innerText[i] == '+' || visor.innerText[i] == '÷'))
        {
            number += visor.innerText[i];
        }else{
            numbers.push(number);
            number = '';
            sinais.push(visor.innerText[i]);
        }
    
    }
    numbers.push(number);
    console.log(numbers);
    console.log(sinais);
    visor.innerText = calcula(numbers, sinais);
    limite = 0;
    limite2 = 0;
    number = '';
    numbers = [];
    sinais = [];

})

function calcula(numeros, sns)
{
   return +numeros[0] + sns[0] +numeros[1]
}