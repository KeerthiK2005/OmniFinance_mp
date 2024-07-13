const questions=[
    {
        question: "What is the primary purpose of tax payment?",
        answers: [
            { text: " To increase government revenue", correct:false},
            { text: "To fund public services and infrastructure", correct:true},
            { text: "To discourage consumption", correct:false},
            { text: " To promote exports", correct:false},
        ]
    },
    {
        question: "Which type of tax is typically the most significant for individuals?",
        answers: [
            { text: "Sales tax", correct:false},
            { text: " Property tax", correct:false},
            { text: "Income tax", correct:true},
            { text: "Corporate tax", correct:false},
        ]
    },
    {
        question: "By what date must taxpayers in the U.S. typically file their annual tax returns?",
        answers: [
            { text: "January 31", correct:false},
            { text: "April 15", correct:true},
            { text: "June 30", correct:false},
            { text: "December 31", correct:false},

        ]
    },
    {
        question:"Which of the following is a tax deduction?",
        answers: [
            { text: "Mortgage interest", correct:true},
            { text: "Education credits", correct:false},
            { text: "Renewable energy incentives", correct:false},
            { text: "Charitable donations", correct:false},
        ]
    },
    {
        question:"How is property tax generally characterized?",
        answers: [
            { text: "Progressive tax", correct:false},
            { text: "Regressive tax", correct:true},
            { text: "Proportional tax", correct:false},
            { text: "Flat tax", correct:false},
        ]
    },
    {
        question:"What does a property tax assessor do?",
        answers: [
            { text: "Collects property taxes from owners", correct:false},
            { text: " Evaluates local property and calculates property taxes", correct:true},
            { text: "Establishes property tax rates", correct:false},
            { text: "Manages the local government budget", correct:false},
        ]
    },
    {
        question:"What is the current standard deduction available to all employees in India?",
        answers: [
            { text: "Rs 25,000", correct:false},
            { text: "Rs 50,000", correct:true},
            { text: "Rs 75,000", correct:false},
            { text: "Rs 100,000", correct:false},
        ]
    },
    {
        question:"Which section of the Indian Income Tax Act covers deductions for contributions to Public Provident Fund (PPF) and Equity Linked Savings Scheme (ELSS)?",
        answers: [
            { text: "Section 24", correct:false},
            { text: "Section 80D", correct:false},
            { text: "Section 80C", correct:true},
            { text: "Section 87A", correct:false},
        ]
    },
    {
        question:"What additional charges may apply to the tax amount after applying the income tax slabs?",
        answers: [
            { text: "Health and education cess", correct:true},
            { text: "Excise duty", correct:false},
            { text: "Sales tax", correct:false},
            { text: "Custom duty", correct:false},
        ]
    },
    {
        question:"What should individuals do to ensure compliance with tax regulations and optimize tax efficiency?",
        answers: [
            { text: "Pay taxes only when audited", correct:false},
            { text: "Utilize illegal tax shelters", correct:false},
            { text: "Follow a systematic approach to calculate taxes accurately", correct:true},
            { text: "Ignore tax deductions and credits", correct:false},
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