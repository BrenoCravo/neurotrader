const questions = [
    {
        question: "Há quanto tempo você opera no mercado?",
        options: [
            { text: "Menos de 6 meses", profile: "Inconsistente" },
            { text: "Entre 6 meses e 1 ano", profile: "Congelado" },
            { text: "Entre 1 e 3 anos", profile: "Vingador" },
            { text: "Mais de 3 anos", profile: "Exausto" }
        ]
    },
    {
        question: "Em média, quantas horas por dia você fica na frente da tela?",
        options: [
            { text: "Menos de 2 horas", profile: "Congelado" },
            { text: "Entre 2 e 4 horas", profile: "Inconsistente" },
            { text: "Entre 4 e 6 horas", profile: "Vingador" },
            { text: "Mais de 6 horas (fico até o mercado fechar)", profile: "Exausto" }
        ]
    },
    {
        question: "Após uma perda (stop loss), qual é sua reação imediata?",
        options: [
            { text: "Fico com raiva e tento recuperar na próxima operação", profile: "Vingador" },
            { text: "Fico com medo de entrar na próxima e hesito", profile: "Congelado" },
            { text: "Fico cansado e começo a operar mal", profile: "Exausto" },
            { text: "Mudo minha estratégia ou setup", profile: "Inconsistente" }
        ]
    },
    {
        question: "Como é sua rotina ANTES de abrir a plataforma?",
        options: [
            { text: "Não tenho rotina, acordo e já abro o gráfico", profile: "Vingador" },
            { text: "Leio notícias e fico ansioso com o cenário", profile: "Congelado" },
            { text: "Tomo café e tento acordar (sinto sono)", profile: "Exausto" },
            { text: "Às vezes analiso, às vezes não (depende do dia)", profile: "Inconsistente" }
        ]
    },
    {
        question: "Com que frequência você segue 100% do seu plano de trading?",
        options: [
            { text: "Raramente, sempre saio do plano no calor do momento", profile: "Vingador" },
            { text: "Sigo o plano, mas às vezes não entro nas operações", profile: "Congelado" },
            { text: "Começo seguindo, mas no final do dia já estou fazendo besteira", profile: "Exausto" },
            { text: "Sempre mudo o plano durante o pregão", profile: "Inconsistente" }
        ]
    },
    {
        question: "Você sente que suas emoções influenciam suas decisões?",
        options: [
            { text: "Sim, a raiva me domina quando perco", profile: "Vingador" },
            { text: "Sim, o medo me paralisa", profile: "Congelado" },
            { text: "Sim, a frustração e o cansaço me pegam", profile: "Exausto" },
            { text: "Sim, a euforia ou a pressa me atrapalham", profile: "Inconsistente" }
        ]
    },
    {
        question: "Você percebe que seu desempenho cai após as 14h?",
        options: [
            { text: "Não, continuo operando igual (e perdendo igual)", profile: "Inconsistente" },
            { text: "Sim, começo a cometer erros bobos de atenção", profile: "Exausto" },
            { text: "Não opero à tarde porque já quebrei a conta de manhã", profile: "Vingador" },
            { text: "Não, opero pouco à tarde", profile: "Congelado" }
        ]
    },
    {
        question: "De 0 a 10, quanto controle você sente que tem sobre suas emoções hoje?",
        options: [
            { text: "0 a 4 (Sinto que sou escravo das emoções)", profile: "Vingador" },
            { text: "5 a 7 (Às vezes controlo, às vezes não)", profile: "Inconsistente" },
            { text: "8 a 10 (Controlo bem, mas o cansaço atrapalha)", profile: "Exausto" },
            { text: "Depende do dia", profile: "Congelado" }
        ]
    }
];

let currentQuestion = 0;
let scores = {
    "Vingador": 0,
    "Congelado": 0,
    "Exausto": 0,
    "Inconsistente": 0
};

const questionEl = document.getElementById("question-text");
const optionsEl = document.getElementById("options-container");
const progressEl = document.getElementById("progress");
const quizBox = document.getElementById("quiz-box");
const loadingContainer = document.getElementById("loading-container");
const questionContainer = document.getElementById("question-container");

function loadQuestion() {
    const q = questions[currentQuestion];
    questionEl.textContent = q.question;
    optionsEl.innerHTML = "";

    q.options.forEach(opt => {
        const btn = document.createElement("button");
        btn.textContent = opt.text;
        btn.classList.add("option-btn");
        btn.onclick = () => selectOption(opt.profile);
        optionsEl.appendChild(btn);
    });

    const progressPercent = ((currentQuestion) / questions.length) * 100;
    progressEl.style.width = `${progressPercent}%`;
}

function selectOption(profile) {
    scores[profile]++;
    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showLoading();
    }
}

function showLoading() {
    progressEl.parentElement.style.display = "none";
    questionContainer.style.display = "none";
    loadingContainer.style.display = "flex";

    const steps = [
        "Analisando padrão neural...",
        "Mapeando gatilhos de amígdala...",
        "Calculando índice de sabotagem...",
        "Gerando diagnóstico..."
    ];

    let stepIndex = 0;
    const interval = setInterval(() => {
        document.getElementById("loading-text").textContent = steps[stepIndex];
        stepIndex++;
        if (stepIndex >= steps.length) {
            clearInterval(interval);
            finishQuiz();
        }
    }, 1500); // 1.5s per step = 6s total loading
}

function finishQuiz() {
    // Find highest score
    let maxScore = 0;
    let finalProfile = "Vingador"; // Default

    for (const [profile, score] of Object.entries(scores)) {
        if (score > maxScore) {
            maxScore = score;
            finalProfile = profile;
        }
    }

    // Redirect to Result Page (Simulated for now, usually result.html?profile=X)
    // We will create result.html next.
    window.location.href = `result.html?profile=${finalProfile}`;
}

// Start
loadQuestion();
