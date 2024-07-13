const questions=[
    {
        question: "What is the Sensex?",
        answers: [
            { text: " An index of 50 major companies listed on the National Stock Exchange (NSE) of India.", correct:false},
            { text: "A regulated marketplace for buying and selling securities.", correct:false},
            { text: "The Bombay Stock Exchange Sensitive Index, comprising 30 financially strong companies.", correct:true},
            { text: "The total value of a company’s outstanding shares.", correct:false},
        ]
    },
    {
        question: "What does IPO stand for in the stock market context?",
        answers: [
            { text: "Initial Profit Offering", correct:false},
            { text: " Initial Public Offering", correct:true},
            { text: "International Purchase Option", correct:false},
            { text: "Investment Portfolio Overview", correct:false},
        ]
    },
    {
        question:"Which term refers to the profit distribution to shareholders by a company?",
        answers: [
            { text: "Equity", correct:false},
            { text: "Derivative", correct:false},
            { text: " Dividend", correct:true},
            { text: "Liquidity", correct:false},

        ]
    },
    {
        question:"What is a 'Bull Market'?",
        answers: [
            { text: "A market condition where stock prices fall.", correct:false},
            { text: "A market condition characterized by rising stock prices and investor optimism.", correct:true},
            { text: "A measure of how popular or necessary an item is.", correct:false},
            { text: "The difference between the bid price and the ask price.", correct:false},
        ]
    },
    {
        question:"Which of the following describes 'Liquidity' in the stock market?",
        answers: [
            { text: "The ease with which an asset can be converted into cash without significantly affecting its price.", correct:true},
            { text: "The degree of variation in the price of a security over time.", correct:false},
            { text: "The total value of a company’s outstanding shares.", correct:false},
            { text: "A portion of a company's earnings distributed to shareholders.", correct:false},
        ]
    },
    {
        question:"What is the 'P/E Ratio'?",
        answers: [
            { text: "The difference between the bid price and the ask price.", correct:false},
            { text: "A valuation metric comparing a company's current share price to its earnings per share.", correct:true},
            { text: "The total number of shares traded in a security or market during a specific period.", correct:false},
            { text: "A fixed amount you pay for a covered health care service in addition to the amount your insurer pays.", correct:false},
        ]
    },
    {
        question:"What does 'Market Capitalization' (Market Cap) represent?",
        answers: [
            { text: "The difference between the bid price and the ask price.", correct:false},
            { text: "The ease with which an asset can be converted into cash", correct:false},
            { text: "The total value of a company’s outstanding shares", correct:true},
            { text: "A financial instrument whose value is based on the value of an underlying asset.", correct:false},
        ]
    },
    {
        question:"In investing, what does 'Risk Tolerance' refer to?",
        answers: [
            { text: "The number of shares traded in a security or market during a specific period.", correct:false},
            { text: "The amount of risk an investor is willing to take.", correct:true},
            { text: "The initial cash payment made when something is bought on credit.", correct:false},
            { text: "A statistical measure representing the value of a portfolio of securities.", correct:false},
        ]
    },
    {
        question:"Which type of account allows you to borrow when purchasing securities?",
        answers: [
            { text: "Cash Account", correct:false},
            { text: "Savings Account", correct:false},
            { text: "Margin Account", correct:true},
            { text: "Retirement Account", correct:false},
        ]
    },
    {
        question:"What is a 'Mutual Fund'?",
        answers: [
            { text: "A type of debt where you lend to the issuer.", correct:false},
            { text: "An investment vehicle pooling funds from multiple investors to purchase a diversified portfolio of securities.", correct:true},
            { text: "A financial instrument whose value is based on an underlying asset.", correct:false},
            { text: "The cost of borrowing money on a yearly basis, expressed as a percentage rate.", correct:false},
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