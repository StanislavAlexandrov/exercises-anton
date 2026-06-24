let currentStep = 0;
let errorNumber = 0;

let mdc = document.querySelector('.mdc-layout-grid__inner');

let currentStepElement = document.querySelector('.currentStep');
let errorElement = document.querySelector('.errors');
let questionElement = document.querySelector('.question');

let parentElement = document.querySelector('.answers');

let victoryPicture = document.querySelector('.victoryPicture');

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

        const restartQuiz = () => {
            currentStep = 0;
            errorNumber = 0;
            errorElement.innerText = `Errors: ${errorNumber}`;
            parentElement.innerHTML = ''; // Remove the restart button
            shuffleArray(dataArray);
            shuffleArray(dataArray[currentStep].allAnswers);
            createQuestions();
            createAnswers();
        };

        allAnswerButtons.forEach((element) => element.remove());
        if (currentStep >= dataArray.length) {
            questionElement.innerText = `🎉 Quiz Completed!`;

            // Create a new div for score display
            let scoreDisplay = document.createElement('h2');
            scoreDisplay.innerText = `❌ Mistakes made: ${errorNumber}`;
            scoreDisplay.className = 'scoreDisplay';
            parentElement.innerHTML = ''; // Remove previous buttons
            parentElement.appendChild(scoreDisplay);

            // Create Restart Button
            const restartButton = document.createElement('button');
            restartButton.innerText = 'Try Again';
            restartButton.className = 'mdc-button';
            restartButton.onclick = restartQuiz;
            parentElement.appendChild(restartButton);

            victoryPicture.style.display = 'block';
            setTimeout(() => (victoryPicture.style.display = 'none'), 4900);

            return; // Prevents any further execution
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

const sentences = [
    'I still do not understand, why did he decide to resign so suddenly.',
    'We are all wondering if the new software updates soon.',
    'Last week, our manager asked us when we are going to finish the quarterly budget.',
    'She wanted to know that where we had bought those beautiful paintings.',
    'The CEO requested that the employees cleaned the office before the VIP guests arrived.',
    'Could you please explain me how this new CRM system works?',
    'I am not sure if or not we should accept their business proposal.',
    'Nobody in the office knows who did write that anonymous complaint letter.',
    'The client asked would we be able to deliver the shipment by Friday.',
    'He told me he already visited Moscow twice before he moved to Texas.',
];

let currentSentence = 0;
const sentenceStepElement = document.querySelector('.sentenceCurrentStep');
const sentenceElement = document.querySelector('.sentence');
const previousSentenceButton = document.querySelector('.sentencePrevious');
const nextSentenceButton = document.querySelector('.sentenceNext');

const showSentence = () => {
    sentenceStepElement.innerText = `Current step: ${currentSentence + 1} of ${sentences.length}`;
    sentenceElement.innerText = sentences[currentSentence];
    previousSentenceButton.disabled = currentSentence === 0;
    nextSentenceButton.disabled = currentSentence === sentences.length - 1;
};

previousSentenceButton.onclick = () => {
    if (currentSentence > 0) {
        --currentSentence;
        showSentence();
    }
};

nextSentenceButton.onclick = () => {
    if (currentSentence < sentences.length - 1) {
        ++currentSentence;
        showSentence();
    }
};

showSentence();
