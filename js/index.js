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
