const dataArray = [
    {
        id: 11,
        sentence: 'Она говорит по-английски очень хорошо.',
        answer: 'She speaks English very well.',
        allAnswers: [
            'She is speaking English very good.',
            'She speaks English very good.',
            'She speaks English very well.', // ✅ Correct
            'She speak English very well.',
        ],
    },
    {
        id: 12,
        sentence: 'Я жду его с нетерпением.',
        answer: 'I am looking forward to seeing him.',
        allAnswers: [
            'I look forward to see him.',
            'I am looking forward seeing him.',
            'I am looking forward to seeing him.', // ✅ Correct
            'I look forward seeing him.',
        ],
    },
    {
        id: 13,
        sentence: 'Он был женат на ней 5 лет.',
        answer: 'He has been married to her for 5 years.',
        allAnswers: [
            'He has been married with her for 5 years.',
            'He was married with her for 5 years.',
            'He has been married to her for 5 years.', // ✅ Correct
            'He married to her for 5 years.',
        ],
    },
    {
        id: 14,
        sentence: 'Она всегда смеется над моими шутками.',
        answer: 'She always laughs at my jokes.',
        allAnswers: [
            'She always laughs on my jokes.',
            'She always laughs at my jokes.', // ✅ Correct
            'She always laugh at my jokes.',
            'She always laugh on my jokes.',
        ],
    },
    {
        id: 15,
        sentence: 'Ты уже купил билеты?',
        answer: 'Have you bought the tickets yet?',
        allAnswers: [
            'Did you bought the tickets?',
            'Did you buyed the tickets?',
            'Have you bought the tickets yet?', // ✅ Correct
            'Have you buy the tickets yet?',
        ],
    },
    {
        id: 16,
        sentence: 'Она привыкла работать по выходным.',
        answer: 'She is used to working on weekends.',
        allAnswers: [
            'She used to work on weekends.',
            'She is used to working on weekends.', // ✅ Correct
            'She used to working on weekends.',
            'She is use to work on weekends.',
        ],
    },
    {
        id: 17,
        sentence: 'Я никогда не был в Японии.',
        answer: 'I have never been to Japan.',
        allAnswers: [
            'I was never in Japan.',
            'I have never been to Japan.', // ✅ Correct
            'I never was in Japan.',
            'I never been in Japan.',
        ],
    },
    {
        id: 18,
        sentence: 'Он предложил пойти в кино.',
        answer: 'He suggested going to the cinema.',
        allAnswers: [
            'He suggested to going to the cinema.',
            'He suggested go to the cinema.',
            'He suggested going to the cinema.', // ✅ Correct
            'He suggest going to the cinema.',
        ],
    },
    {
        id: 19,
        sentence: 'Мне нужно сделать домашнее задание.',
        answer: 'I need to do my homework.',
        allAnswers: [
            'I need to make my homework.',
            'I need doing my homework.',
            'I need to do my homework.', // ✅ Correct
            'I need do my homework.',
        ],
    },
    {
        id: 20,
        sentence: 'Занятие начнется в 5 часов.',
        answer: 'The class will start at 5 o’clock.',
        allAnswers: [
            'The class will start in 5 o’clock.',
            'The class start at 5 o’clock.',
            'The class will start at 5 o’clock.', // ✅ Correct
            'The class will start on 5 o’clock.',
        ],
    },
    {
        id: 21,
        sentence: 'Я надеюсь сдать экзамен.',
        answer: 'I hope to pass the exam.',
        allAnswers: [
            'I hope pass the exam.',
            'I hope to pass the exam.', // ✅ Correct
            'I am hoping passing the exam.',
            'I hope passing the exam.',
        ],
    },
    {
        id: 22,
        sentence: 'Я устал. Давай отдохнем.',
        answer: 'Let’s take a rest.',
        allAnswers: [
            'Let’s have the rest.',
            'Let’s take a rest.', // ✅ Correct
            'Let’s make a rest.',
            'Let’s do a rest.',
        ],
    },
    {
        id: 23,
        sentence: 'Я не могу позволить себе купить эту машину.',
        answer: 'I can’t afford to buy this car.',
        allAnswers: [
            'I can’t afford buying this car.',
            'I can’t afford to buy this car.', // ✅ Correct
            'I can’t afford buy this car.',
            'I can’t afford to buying this car.',
        ],
    },
    {
        id: 24,
        sentence: 'Она хороша в пении.',
        answer: 'She is good at singing.',
        allAnswers: [
            'She is good in singing.',
            'She is good at singing.', // ✅ Correct
            'She is good on singing.',
            'She is good with singing.',
        ],
    },
    {
        id: 25,
        sentence: 'Мне не нравится вставать рано.',
        answer: 'I don’t like getting up early.',
        allAnswers: [
            'I don’t like get up early.',
            'I don’t like getting up early.', // ✅ Correct
            'I don’t like to gets up early.',
            'I don’t like gets up early.',
        ],
    },
    {
        id: 26,
        sentence: 'Ты вчера работал?',
        answer: 'Did you work yesterday?',
        allAnswers: [
            'Did you worked yesterday?',
            'Did you work yesterday?', // ✅ Correct
            'Do you worked yesterday?',
            'Do you work yesterday?',
        ],
    },
    {
        id: 27,
        sentence: 'Этот ресторан дороже, чем тот.',
        answer: 'This restaurant is more expensive than that one.',
        allAnswers: [
            'This restaurant is most expensive than that one.',
            'This restaurant is more expensive than that one.', // ✅ Correct
            'This restaurant is much expensive than that one.',
            'This restaurant is the more expensive than that one.',
        ],
    },
    {
        id: 28,
        sentence: 'Он ушел, не попрощавшись.',
        answer: 'He left without saying goodbye.',
        allAnswers: [
            'He left without say goodbye.',
            'He left without saying goodbye.', // ✅ Correct
            'He left without to say goodbye.',
            'He left without said goodbye.',
        ],
    },
    {
        id: 29,
        sentence: 'Я не возражаю против того, чтобы подождать.',
        answer: 'I don’t mind waiting.',
        allAnswers: [
            'I don’t mind wait.',
            'I not mind to wait.',
            'I don’t mind waiting.', // ✅ Correct
            'I don’t mind to waiting.',
        ],
    },
    {
        id: 30,
        sentence: 'Это не имеет смысла.',
        answer: 'It doesn’t make sense.',
        allAnswers: [
            'It doesn’t makes sense.',
            'It doesn’t make sense.', // ✅ Correct
            'It don’t make sense.',
            'It doesn’t making sense.',
        ],
    },
];
