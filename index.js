const emailInput = document.getElementById('email');
const continueBtn = document.getElementById('continueBtn');
const themeToggle = document.getElementById('themeToggle');

// Enable the Next button once an email is entered
emailInput.addEventListener('input', () => {
    if (emailInput.value.trim().length > 0) {
        continueBtn.classList.add('active');
        continueBtn.removeAttribute('disabled');
    } else {
        continueBtn.classList.remove('active');
        continueBtn.setAttribute('disabled', '');
    }
});

// 3-state theme toggle: moon (light) → sun (dark) → filled crescent (light) → repeat
const root = document.documentElement;
const themeStates = [
    { icon: 'moon',     theme: 'light' },
    { icon: 'sun',      theme: 'dark'  },
    { icon: 'crescent', theme: 'light' },
];
let themeIndex = 0;

root.setAttribute('data-theme', themeStates[0].theme);
root.setAttribute('data-icon',  themeStates[0].icon);

themeToggle.addEventListener('click', () => {
    themeIndex = (themeIndex + 1) % themeStates.length;
    const { icon, theme } = themeStates[themeIndex];
    root.setAttribute('data-theme', theme);
    root.setAttribute('data-icon',  icon);
});
