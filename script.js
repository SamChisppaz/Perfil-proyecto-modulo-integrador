const titleElement = document.querySelector('.texto-principal h1 span');
const fullText = 'Sandra Ramirez';


function writeTitle() {
let index = 0;

function writeNextLetter() {
    if (index < fullText.length) {
    titleElement.textContent += fullText[index];
    index++;
    setTimeout(writeNextLetter, 100); 
    }
}

titleElement.textContent = '';
writeNextLetter();
}

function animateSkillBars() {
    const skillBars = document.querySelectorAll('.nivel-habilidad');
    skillBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0%';
        setTimeout(() => {
            bar.style.width = width;
            bar.style.transition = 'width 1s ease-in-out';
        }, 200);
    });
}

window.addEventListener('load', () => {
    writeTitle();
    setTimeout(animateSkillBars, 4000); 
});