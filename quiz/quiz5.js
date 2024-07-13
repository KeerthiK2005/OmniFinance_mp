const questions=[
    {
        question: "What is a loan?",
        answers: [
            { text: "A type of grant that does not need to be repaid", correct:false},
            { text: "A type of credit vehicle where a sum of money is lent to another party in exchange for future repayment", correct:true},
            { text: "A form of donation given to charitable organizations", correct:false},
            { text: "A government subsidy for businesses", correct:false},
        ]
    },
    {
        question: "Which type of loan is secured by pledging gold ornaments or jewelry as collateral?",
        answers: [
            { text: "Home Loan", correct:false},
            { text: "Vehicle Loan", correct:false},
            { text: "Gold Loan", correct:true},
            { text: "Loan against Property", correct:false},
        ]
    },
    {
        question: "What is typically the tenure range for a home loan?",
        answers: [
            { text: "1 to 5 years", correct:false},
            { text: "5 to 10 years", correct:false},
            { text: "10 to 15 years", correct:false},
            { text: "15 to 30 years", correct:true},

        ]
    },
    {
        question:"Which type of loan allows you to use your property as collateral to raise funds for any financial requirement?",
        answers: [
            { text: "Gold Loan", correct:false},
            { text: "Vehicle Loan", correct:false},
            { text: "Loan against Property", correct:true},
            { text: "Loan against Security", correct:false},
        ]
    },
    {
        question:"What is the loan-to-value ratio typically covered for home loans?",
        answers: [
            { text: "Up to 50% of the property’s value", correct:false},
            { text: "Up to 60% of the property’s value", correct:false},
            { text: "Up to 80% to 90% of the property’s value", correct:true},
            { text: "Up to 100% of the property’s value", correct:false},
        ]
    },
    {
        question:"Which type of loan allows you to borrow against your accumulated Provident Fund (PF) balance?",
        answers: [
            { text: "Loan against Fixed Deposit", correct:false},
            { text: "Loan against PF/EPF", correct:true},
            { text: "Loan against Property", correct:false},
            { text: "Loan against Security", correct:false},
        ]
    },
    {
        question:"What is the interest rate range for gold loans?",
        answers: [
            { text: "5% to 10% per annum", correct:false},
            { text: "8% to 18% per annum", correct:true},
            { text: "12% to 20% per annum", correct:false},
            { text: "20% to 25% per annum", correct:false},
        ]
    },
    {
        question:"Which type of loan allows you to use securities such as stocks, mutual funds, and insurance policies as collateral?",
        answers: [
            { text: "Home Loan", correct:false},
            { text: "Loan against Fixed Deposit", correct:false},
            { text: "Loan against Security", correct:true},
            { text: "Gold Loan", correct:false},
        ]
    },
    {
        question:"How much of the ex-showroom price of a vehicle can typically be financed through a vehicle loan?",
        answers: [
            { text:  "Up to 50%", correct:false},
            { text: "Up to 60%", correct:false},
            { text: "Up to 75%", correct:false},
            { text: "Up to 85%", correct:true},
        ]
    },
    {
        question:"What is the typical loan amount range that can be sanctioned against the NAV of eligible shares and equity funds in a loan against security?",
        answers: [
            { text: "Up to 50%", correct:false},
            { text: "Up to 65%", correct:true},
            { text: "Up to 75%", correct:false},
            { text: " Up to 85%", correct:false},
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