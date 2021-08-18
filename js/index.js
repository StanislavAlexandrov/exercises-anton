let currentStep = 0;
let errorNumber = 0;

let mdc = document.querySelector('.mdc-layout-grid__inner');

let currentStepElement = document.querySelector('.currentStep');
let errorElement = document.querySelector('.errors');
let questionElement = document.querySelector('.question');

let parentElement = document.querySelector('.answers');

errorElement.innerText = `Errors: ${errorNumber}`;
currentStepElement.innerText = `Current step: ${currentStep + 1} of ${
    dataArray.length
}`;

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

const createQuestions = () => {
    questionElement.innerText = dataArray[currentStep].sentence;
};

const createAnswers = () =>
    dataArray[currentStep].allAnswers.map((answer) => {
        const newDiv = document.createElement('button');

        newDiv.onclick = clicker;
        newDiv.className = 'mdc-chip answerButton ';

        const newContent = document.createTextNode(answer);
        newDiv.appendChild(newContent);
        parentElement.appendChild(newDiv);
    });

const clicker = (answer) => {
    if (answer.target.innerHTML === dataArray[currentStep].answer) {
        mdc.style.backgroundColor = '#80d983';

        setTimeout(() => (mdc.style.backgroundColor = '#eee'), 250);

        ++currentStep;

        const allAnswerButtons = document.querySelectorAll('.answerButton');

        allAnswerButtons.forEach((element) => element.remove());
        if (currentStep > dataArray.length - 1) {
            currentStep = 0;
        }

        shuffleArray(dataArray[currentStep].allAnswers);
        currentStepElement.innerText = `Current step: ${currentStep + 1} of ${
            dataArray.length
        }`;
        createQuestions();
        createAnswers();
    } else {
        ++errorNumber;
        errorElement.innerText = `Errors: ${errorNumber}`;
        mdc.style.backgroundColor = '#c70f0f';

        setTimeout(() => (mdc.style.backgroundColor = '#eee'), 250);
    }
};
shuffleArray(dataArray);
shuffleArray(dataArray[currentStep].allAnswers);
createQuestions();
createAnswers();
