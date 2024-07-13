const questions=[
    {
        question: "What is a 'Cryptocurrency'?",
        answers: [
            { text: "A physical form of money issued by central banks.", correct:false},
            { text: " Digital or virtual currency that uses cryptography for security and operates independently of a central bank.", correct:true},
            { text: "A government-backed electronic payment system.", correct:false},
            { text: "A type of commodity traded on stock exchanges.", correct:false},
        ]
    },
    {
        question: "What is 'Blockchain'?",
        answers: [
            { text: "A type of cryptocurrency.", correct:false},
            { text: "A centralized database managed by a single entity.", correct:false},
            { text: "A decentralized, distributed ledger that records all transactions across a network of computers.", correct:true},
            { text: "A regulatory framework for financial markets.", correct:false},
        ]
    },
    {
        question:"Which of the following is an 'Altcoin'?",
        answers: [
            { text: "Bitcoin", correct:false},
            { text: "Litecoin", correct:false},
            { text: "Ethereum", correct:false},
            { text: " Both B and C", correct:true},

        ]
    },
    {
        question:"What does the term 'Mining' refer to in cryptocurrency?",
        answers: [
            { text: "The process of creating physical coins.", correct:false},
            { text: "The process of validating transactions and adding them to the blockchain using computational power.", correct:true},
            { text: "The process of trading cryptocurrencies on an exchange.", correct:false},
            { text: "The process of storing cryptocurrencies in a wallet.", correct:false},
        ]
    },
    {
        question:"What is a 'Smart Contract'?",
        answers: [
            { text: "A written agreement between two parties that is notarized by a lawyer.", correct:false},
            { text: "Self-executing contracts with the terms of the agreement directly written into code.", correct:true},
            { text: "A financial agreement managed by a central authority.", correct:false},
            { text: "A type of traditional contract with enhanced security features.", correct:false},
        ]
    },
    {
        question:"Which type of wallet stores cryptocurrency offline and is generally considered more secure?",
        answers: [
            { text: "Hot Wallet", correct:false},
            { text: "Software Wallet", correct:false},
            { text: "Exchange Wallet", correct:false},
            { text: "Cold Wallet", correct:true},
        ]
    },
    {
        question:"What should you consider when selecting a cryptocurrency exchange?",
        answers: [
            { text: "The physical location of the exchange's headquarters.", correct:false},
            { text: "Security, fees, volume of trading, minimum investment requirements, and types of cryptocurrency available.", correct:true},
            { text: "The number of employees working at the exchange.", correct:false},
            { text: "The color scheme of the exchange’s website.", correct:false},
        ]
    },
    {
        question:"What is one key reason to avoid smaller/newer cryptocurrencies heavily promoted on social media platforms?",
        answers: [
            { text: "They are usually more expensive.", correct:false},
            { text: "They have higher transaction fees.", correct:false},
            { text: "They are more prone to pump-and-dump schemes.", correct:true},
            { text: "They have lower trading volumes", correct:false},
        ]
    },
    {
        question:"How should you decide how much to invest in cryptocurrency?",
        answers: [
            { text: "By investing all available funds to maximize returns.", correct:false},
            { text: " By evaluating your budget, risk tolerance, investing strategy, and not investing more than you can afford to lose.", correct:true},
            { text: "By following recommendations from social media experts.", correct:false},
            { text: "By matching the investment amounts of friends and family.", correct:false},
        ]
    },
    {
        question:"What is the 'Stash Way' philosophy in managing crypto investments?",
        answers: [
            { text: "Regular investing, diversification, and investing for the long term.", correct:true},
            { text: "Investing all available funds at once to maximize returns", correct:false},
            { text: "Following social media trends for investment decisions", correct:false},
            { text: "Focusing solely on high-risk, high-reward cryptocurrencies.", correct:false},
        ]
    },
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);

    }

}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";

}


function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}




function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }

}


nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz();