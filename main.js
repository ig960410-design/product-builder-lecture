
class LottoBall extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const number = this.getAttribute('number');
        const color = this.getColorForNumber(parseInt(number));
        const delay = this.getAttribute('delay');

        this.shadowRoot.innerHTML = `
            <style>
                .ball {
                    width: var(--ball-size, 60px);
                    height: var(--ball-size, 60px);
                    border-radius: 50%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 24px;
                    font-weight: bold;
                    color: white;
                    background-color: ${color};
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                    opacity: 0;
                    animation: ball-animation 0.5s ease-out forwards;
                    animation-delay: ${delay};
                }

                @keyframes ball-animation {
                    from {
                        opacity: 0;
                        transform: scale(0.5);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }
            </style>
            <div class="ball">${number}</div>
        `;
    }

    getColorForNumber(number) {
        if (number <= 10) return '#f5a623'; // Yellow
        if (number <= 20) return '#4a90e2'; // Blue
        if (number <= 30) return '#e94e77'; // Red
        if (number <= 40) return '#7ed321'; // Green
        return '#9013fe'; // Purple
    }
}

customElements.define('lotto-ball', LottoBall);

const generateBtn = document.getElementById('generate-btn');
const numberDisplay = document.querySelector('.number-display');
const themeToggle = document.getElementById('theme-toggle');

// Theme Toggle Logic
const currentTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', currentTheme);
updateThemeButtonText(currentTheme);

themeToggle.addEventListener('click', () => {
    const theme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    updateThemeButtonText(theme);
});

function updateThemeButtonText(theme) {
    themeToggle.textContent = theme === 'dark' ? 'Light Mode' : 'Dark Mode';
}

generateBtn.addEventListener('click', () => {
    numberDisplay.innerHTML = '';
    const numbers = generateLottoNumbers();
    numbers.forEach((number, index) => {
        const lottoBall = document.createElement('lotto-ball');
        lottoBall.setAttribute('number', number);
        lottoBall.setAttribute('delay', `${index * 0.2}s`);
        numberDisplay.appendChild(lottoBall);
    });
});

function generateLottoNumbers() {
    const numbers = new Set();
    while (numbers.size < 6) {
        numbers.add(Math.floor(Math.random() * 45) + 1);
    }
    return Array.from(numbers).sort((a, b) => a - b);
}
