const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "1- Pessoas estão usando as redes sociais para competir por relevância dentro de uma plataforma, onde usam de sua influência para divulgar produtos ou marcas que incentivam o consumismo ou o gasto exagerado de dinheiro. Qual sua opinião sobre jogos de azar online?",
    
        alternativas:[
       
         { texto: "a- Acho absurdo e desnecessário, porque a influência dessas pessoas pode acabar atingindo pessoas que não tem o conhecimento necessário para utilizar tais meios de lucro, onde esses podem não ser concretos e prejudicar a vida dessas pessoas.",
            afirmacao: "Esse comentário mostra que o autor se preocupa com as pessoas menos afortunadas ou que não tem certo controle do que fazem, priorizando a integridade e a veracidade de propagandas nas redes sociais."},
        

         { texto: "b- Acho bom, pois sei até onde posso ou não investir com responsabilidade na internet, portanto eu vejo estes como uma forma de renda extra e até entretenimento.",
            afirmacao: "Uma pessoa que possivelmente entende os riscos de suas ações online e sabe como lidar com eles de forma responsável." } ]},

    {
         enunciado: "2- O que você acha sobre jogos online com micro transações abusivas?",
          alternativas:[
               
          { texto: "a- Gosto, porque se eu comprar um determinado pacote eu fico mais forte dentro do jogo",
           afirmacao: "Pessoas com vicio comprariam compulsivamente sem olhar o preço."},
                
        
         { texto: "b- Acho ruim, pois alguns jogos os itens pagos deixam os jogadores mais fortes",
          afirmacao: "Entende que pode ser prejudicial pois pode desfavorecer alguns jogadores e “quebrar” com a experiencia do jogo" } ]},
    {
          enunciado: "3- Sabemos que no mercado de jogos, existe um mercado interno criado para favorecer jogadores com itens pagos com dinheiro real, qual sua opinião sobre essa prática?",
           alternativas:[
                       
           { texto: "a- Não gosto, pois as pessoas menos favorecidas financeiramente não podem usufruir de tais itens mesmo tendo habilidades para possuírem através de conquistas dentro do jogo, em vez de precisarem de dinheiro real.",
            afirmacao: "A pessoa acha injusto ter que pagar por algo que deveria ser conquistado com habilidades."},
                        
                
             { texto: "b- Eu concordo, pois se a pessoa quer investir no jogo de forma consciente e dentro das regras do jogo ela pode, afinal essa opção existe para todos os jogadores e o jogo precisa de lucro para continuar rodando como qualquer meio de lazer.",
             afirmacao: "A pessoa concorda com a prática pois cada pessoa é responsável pela sua escolha de gastar ou não no jogo." } ]}


        ]
       
let atual = 0;
let perguntaAtual;
let historiafinal = "";

function mostraPergunta(){
if(atual >= perguntas.length){
    mostraResultado();
    return;
}


    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent="";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click" ,()=> respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiafinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Sobre Voce";
    textoResultado.textContent = historiafinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
