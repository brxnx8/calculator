const botao = document.querySelectorAll(".button");
const visor = document.querySelector(".screen");
const clearall = document.querySelector(".button-clearAll");
const igual = document.querySelector(".button-equal");
const clear = document.querySelector(".button-clear");


let limite = 0;
let limite2 = 0;


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


clearall.addEventListener('click', () => {
    visor.innerText = '';
    limite = 0;
    limite2 = 0;
})

igual.addEventListener('click', () => {
    let equa = visor.innerText.toString();
    for(i=0; i<equa.length; i++){
        if(equa[i] == 'x' )
        {
           equa = equa.replace('x', '*');
        }
        if(equa[i] == '÷')
        {
            equa = equa.replace('÷', '/');
        }
    
    }

    visor.innerText = eval(equa);
    limite = 0;
    limite2 = 0;

})

clear.addEventListener('click', () => {
    visor.innerText = visor.innerText.slice(0, -1);
    limite = 0;
    limite2 = 0;
})
