// Variáveis para controle de interface
let seuVotoPara = document.querySelector('.top-1 span');
let top2 = document.querySelector('.top-2 span');
let top3 = document.querySelector('.top-3');
let top4 = document.querySelector('.top-4');
let topRight = document.querySelector('.top-right');
let bot = document.querySelector('.bot');

//Variável Global
let etapaAtual = 0;
let numero = '';

function comecarEtapa() {
    let etapa = etapas[etapaAtual];
    etapa = 1;
    alert(etapa);
}


seuVotoPara.style.display = "none";
topRight.innerHTML = '';
top2.style.display = 'none';
top4.innerHTML = '';
top3.innerHTML = '';



