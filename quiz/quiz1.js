const questions=[
    {
        question: "What does APR stand for?",
        answers: [
            { text: "Annual Payment Rate", correct:false},
            { text: " Annual Percentage Rate", correct:true},
            { text: "Annual Profit Rate", correct:false},
            { text: "Annual Payback Rate", correct:false},
        ]
    },
    {
        question:"Which type of account allows you to make deposits, pay bills, and make withdrawals?",
        answers: [
            {text: "Savings account", correct:false},
            {text: " Checking account", correct:true},
            {text: "Certificate of deposit (CD)", correct:false},
            {text: " Money market account", correct:false},
        ]
    },
    {
        question:"What is the purpose of the FAFSA form?",
        answers: [
            {text: "To apply for a federal student loan", correct:false},
            {text: "o calculate a student's EFC (Expected Family Contribution)", correct:true},
            {text: "To request a federal tax refund", correct:false},
            {text: "To apply for a government benefits card", correct:false},

        ]
    },
    {
        question:"What is a beneficiary in the context of insurance?",
        answers: [
            {text: "The person who sells the insurance policy", correct:false},
            {text: "The company that provides the insurance", correct:false},
            {text: "The person or entity designated to receive the policy's benefits or payments", correct:true},
            {text: "The person who pays for the insurance policy", correct:false},
        ]
    },
    {
        question:"What is a bond?",
        answers: [
            {text: "A type of debt where the issuer promises to pay interest and repay the principal at maturity", correct:true},
            {text: "A type of stock that represents ownership in a company", correct:false},
            {text: "A short-term loan from a bank", correct:false},
            {text: "A type of insurance policy", correct:false},
        ]
    },
    {
        question:"What is the Consumer Price Index (CPI)?",
        answers: [
            {text: "A measure of the total goods and services produced by a country", correct:false},
            {text: "A measure of the average change over time in the prices paid by urban consumers for a market basket of consumer goods and services", correct:true},
            {text: "A measure of the value of a country's currency", correct:false},
            {text: "A measure of the interest rates set by the Federal Reserve", correct:false},
        ]
    },
    {
        question:"What is compound interest?",
        answers: [
            {text: "Interest calculated only on the principal amount", correct:false},
            {text: "Interest calculated on both the principal amount and the interest already earned", correct:true},
            {text:" Interest that must be paid in full at the end of the loan term", correct:false},
            {text: "Interest that is paid by the government on savings accounts", correct:false},
        ]
    },
    {
        question:"What is a credit score?",
        answers: [
            {text: "A summary of your credit activity and current credit situation", correct:false},
            {text: "A number created from a scoring model that uses information from your credit history", correct:true},
            {text: "A report that lists all your assets and liabilities", correct:false},
            {text: "A measure of the interest you have paid on loans", correct:false},
        ]
    },
    {
        question:"What does it mean to have a fixed expense?",
        answers: [
            {text: "An expense that varies each month", correct:false},
            {text: "An expense that must be paid only once a year", correct:false},
            {text: "An expense that must be paid each month and generally costs the same amount", correct:true},
            {text: "An optional expense that can be delayed", correct:false},
        ]
    },
    {
        question:"What is a gross income?",
        answers: [
            {text: "Total income after taxes and deductions", correct:false},
            {text: "Total income before taxes and deductions", correct:true},
            {text: "Total income from investments", correct:false},
            {text: "Total income from passive sources", correct:false},
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