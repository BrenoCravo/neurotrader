// Profile Data Configuration
const profiles = {
    "Vingador": {
        name: "O VINGADOR (REVENGE TRADER)",
        headline: "Pare de tentar recuperar o que perdeu. Seu cérebro está sequestrado pelo 'Modo de Vingança'.",
        subheadline: "Você sabe operar, mas quando toma um Los, sente uma raiva incontrolável que te faz devolver tudo. Descubra como desativar esse gatilho neural em 90 segundos."
    },
    "Congelado": {
        name: "O CONGELADO (HESITATOR)",
        headline: "O Medo de errar está te custando R$ 500 por dia. O problema não é o gráfico, é a sua Amígdala.",
        subheadline: "Você vê a entrada perfeita, mas trava. Quando decide entrar, o movimento já passou. Entenda por que seu cérebro está te sabotando e como destravar."
    },
    "Exausto": {
        name: "O EXAUSTO (BURNOUT TRADER)",
        headline: "Você não precisa de mais tempo de tela. Você precisa de 'Higiene Neural'.",
        subheadline: "Seu desempenho cai drasticamente após as 14h? Isso é Fadiga de Decisão. Aprenda o protocolo dos traders de elite para manter o foco afiado o dia todo."
    },
    "Inconsistente": {
        name: "O INCONSISTENTE (DOPAMINE SEEKER)",
        headline: "Sua falta de consistência não é culpa da estratégia. É falta de um Protocolo Neural.",
        subheadline: "Você muda de setup toda semana em busca da 'bala de prata'. Descubra como treinar seu cérebro para seguir O MESMO plano todos os dias sem tédio."
    }
};

// Get profile from URL
const urlParams = new URLSearchParams(window.location.search);
const profileType = urlParams.get('profile');

// DOM Elements
const profileNameEl = document.getElementById('profile-name');
const headlineEl = document.getElementById('dynamic-headline');
const subheadlineEl = document.getElementById('dynamic-subheadline');

// Inject Content
if (profileType && profiles[profileType]) {
    const p = profiles[profileType];
    profileNameEl.textContent = p.name;
    headlineEl.textContent = p.headline;
    subheadlineEl.textContent = p.subheadline;

    // Add specific styling based on profile?
    // document.body.classList.add(profileType.toLowerCase());
} else {
    // Default fallback (Vingador)
    const p = profiles["Vingador"];
    profileNameEl.textContent = p.name;
    headlineEl.textContent = p.headline;
    subheadlineEl.textContent = p.subheadline;
}

// Optional: VSL Play Logic / Delay
// ...
