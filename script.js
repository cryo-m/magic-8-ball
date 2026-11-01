let questionBox = document.createElement('div');
questionBox.classList.add('question-box');

let questionInput = document.createElement('input');
questionInput.setAttribute('type', 'text');
questionInput.setAttribute('placeholder', 'Введіть ваше запитання...');
questionInput.classList.add('question-input');

questionBox.appendChild(questionInput);

let magicBall = document.createElement('div');
magicBall.classList.add('magic-ball');
magicBall.setAttribute('onclick', 'answer()');

let ballWindow = document.createElement('div');
ballWindow.classList.add('ball-window');

let answerText = document.createElement('span');
answerText.classList.add('answer-text');
answerText.textContent = "8";

ballWindow.appendChild(answerText);
magicBall.appendChild(ballWindow);

document.body.append(questionBox, magicBall);

function answer(){
    const answers = [
    "Безперечно",
    "Вирішено напевно",
    "Без жодних сумнівів",
    "Однозначно так",
    "Можеш бути впевнений у цьому",
    "Як на мене - так",
    "Найімовірніше",
    "Знаки кажуть - так",
    "Так",
    "Запитай пізніше",
    "Краще тобі зараз цього не знати",
    "Зараз неможливо передбачити",
    "Навіть не розраховуй",
    "За моїми даними - ні",
    "Перспективи не дуже хороші",
    "Дуже сумнівно"
    ];

    let index = Math.floor(Math.random() * answers.length);
    
    answerText.style.opacity = '0';
    setTimeout(() => {
        answerText.style.fontSize = '1.8em'
        answerText.textContent = answers[index];
        answerText.style.opacity = '1';
    }, 300);
}