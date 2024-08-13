const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "pergunta 1",
        alternativas:[
       
         { texto: "alternativa 1",
            afirmacao: "afirmaçao 1"},
        

         { texto: "alternativa 2",
            afirmacao: "afirmacao 2" } ]},

    {
         enunciado: "pergunta 2",
          alternativas:[
               
          { texto: "alternativa 1",
           afirmacao: "afirmaçao 1"},
                
        
         { texto: "alternativa 2",
          afirmacao: "afirmacao 2" } ]},
    {
          enunciado: "pergunta 3",
           alternativas:[
                       
           { texto: "alternativa 1",
            afirmacao: "afirmaçao 1"},
                        
                
             { texto: "alternativa 2",
             afirmacao: "afirmacao 2" } ]}


        ]
       
let atual = 0;
let perguntaAtual;

function mostraPergunta(){
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent="";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click" , function(){
            atual++;
            mostraPergunta();
        });
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

mostraPergunta();
