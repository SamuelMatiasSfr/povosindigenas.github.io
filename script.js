const questions = [
    {
        question: "Qual é o maior grupo indígena do Brasil?",
        options: ["Ticuna","Guarani","Guajajara","Yanomami"],
        optionCorreta: "Guarani",
        explication: "A população indígena do Brasil é de 1.693.535 habitantes. Os povos guarani é o mais populoso entre eles, com mais de 85 mil pessoas."
    },
    {
        question: "Qual é o nome do sistema de troca adotado pelos portugueses com os indígenas no início da colonização?",
        options: ["escambo","encomienda","repartimento","mita"],
        optionCorreta: "escambo",
        explication: "No início da colonização, os indígenas trocavam o pau-brasil por diversos utensílios, este sistema de troca ficou conhecido como escambo."
    },
    {
        question: "Qual é o nome do principal grupo indígena que apoiou os franceses na tentativa destes de colonizar terras do Brasil?",
        options: ["Tupinambás","Tamoio","Guarani","Pataxó"],
        optionCorreta: "Tamoio",
        explication: "O principal povo indígena que apoiou os franceses foram os Tamaio, que tinham o objetivo de derrotar os colonizadores portugueses e os outros povos que se aliaram aos lusos(portugueses)."
    },
    {
        question: "Quantos grupos étnicos indígenas existem no Brasil atualmente?",
        options: ["266","400","257","305"],
        optionCorreta: "305",
        explication: "Existem cerca de 305 etnias indígenas diferentes no Brasil atualmente."
    },
    {
        question: "Quais eram as principais mercadorias desejadas pelos indígenas no sistema de escambo?",
        options: ["alimentos","espelhos","objetos metálicos","cavalos"],
        optionCorreta: "objetos metálicos",
        explication: "Diferentes objetos eram trocados no escambo, dentre eles destaca-se os objetos metálicos, como facões, machados, entre outras coisas."
    },
    {
        question: "Qual é a capital do Brasil onde se encontra a sede da Fundação Nacional do Índio (FUNAI)?",
        options: ["Rio de Janeiro","Belo Horizonte","Brasília","Manaus"],
        optionCorreta: "Brasília",
        explication: "Criada em 1967, com a missão de proteger e promover os direitos dos povos indígenas no Brasil. A FUNAI têm sua sede localizada na cidade de Brasília."
    },
    {
        question: "Qual é a língua indígena mais falada no Brasil atualmente?",
        options: ["Tikuna","Mundurukú","Guarani","Macro-Jê"],
        optionCorreta: "Tikuna",
        explication: "Embora exista uma grande diversidade de grupos e línguas indígenas diferentes, a língua mais falada é o Tikuna (pertencente a outros troncos línguisticos) com 34 mil falantes."
    },
    {
        question: "Qual é o tronco-linguístico indígena mais conhecido?",
        options: ["Tupi","Mundurukú","Mawé","Macro-Jê"],
        optionCorreta: "Tupi",
        explication: "O Tupi é o mais conhecido, possuindo mais falantes entre os dois grandes troncos língusticos do Brasil: Tupi e Macro-Jê."
    },
    {
        question: "Quem é o líder indígena que discursou a favor dos povos originários na assembleia constituinte?",
        options: ["Raoni Metuktire","Davi Kopenawa","Daniel Munduruku","Ailton Krenak"],
        optionCorreta: "Ailton Krenak",
        explication: "Em 1987, Ailton Krenak protestou na Assembleia Constituinte, defendendo que os povos indígenas não colocavam em risco o desenvolvimento do país, nem eram contra os interesses do Brasil."
    },
    {
        question: "Qual é o(a) lider indígena ministro(a) do Ministério dos Povos Indígenas?",
        options: ["Ailton Krenak","Sõnia Guajajara","Daniel Munduruku","Daiara Tukano"],
        optionCorreta: "Sônia Guajajara",
        explication: "Sônia Bone de Sousa Silva Santos, conhecida como Sônia Guajajara, é indígena do povo Guajajara. Graduada em Letras e pós-graduada em Educação Especial. Ela é ministra do Ministério dos Povos Indígenas, criado em 2023."
    }
];

let cont_perg = 0;
let score = 0;

const texto_quest = document.getElementById("texto-questao");
const opcoes = document.getElementById("barra-opcoes");
const resp_texto = document.getElementById("texto-resp");
const buttonProx = document.getElementById("proximo");
const texto_exp = document.getElementById("texto-explic");
const expl = document.getElementById("explicacao");

function carregarPergunta(){
    expl.style.display = "none";
    texto_exp.style.display = "none"; 
    const perg_atual = questions[cont_perg];
    texto_quest.textContent = perg_atual.question;
    opcoes.innerHTML = "";
    perg_atual.options.forEach((option) => {
        buttonProx.style.display = "none";
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("option");
        button.addEventListener("click", verifica_resposta);
        opcoes.appendChild(button);
    });
}

function verifica_resposta(event){
    const resp_usuario = event.target.textContent;
    const perg_atual = questions[cont_perg];
    if (resp_usuario === perg_atual.optionCorreta){
        score++;
    }
    opcoes.querySelectorAll(".option").forEach((button) => {
        button.removeEventListener("click", verifica_resposta);
    });
        resp_texto.textContent = `Resposta correta: ${perg_atual.optionCorreta}`;
        buttonProx.style.display = "block";
        texto_exp.style.display = "block"; 
        expl.style.display = "block";
        texto_exp.textContent = `${perg_atual.explication}`;
}



    buttonProx.addEventListener("click", () => {
        cont_perg++;
        if(cont_perg < questions.length){
            carregarPergunta();
            resp_texto.textContent = "";
            buttonProx.style.display = "none";
        } else {
            texto_exp.style.display = "none"; 
            texto_quest.textContent = "Quiz concluído!";
            opcoes.innerHTML = ""; 
            resp_texto.textContent = `Pontuação: ${score + 1} de ${questions.length}`;
            buttonProx.style.display = "none";
        }
     });

     carregarPergunta();
