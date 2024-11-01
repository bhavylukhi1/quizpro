// Quiz data for each level - only a few questions shown; add more as needed to reach 50 total
const quizData = {
    std10: [
        { question: "What is 2 + 2?", options: ["3", "4", "5"], answer: "4" },
        { question: "What is the capital of France?", options: ["London", "Paris", "Rome"], answer: "Paris" },
        { question: "What is 5 * 6?", options: ["30", "20", "25"], answer: "30" },
        { question: "Who wrote 'Macbeth'?", options: ["Shakespeare", "Tolkien", "Rowling"], answer: "Shakespeare" },
        { question: "What is the smallest prime number?", options: ["1", "2", "3"], answer: "2" }, { question: "Which planet is known as the Red Planet?", options: ["Earth", "Mars", "Jupiter"], answer: "Mars" },
        { question: "What is the boiling point of water?", options: ["100°C", "0°C", "50°C"], answer: "100°C" },
        { question: "Who invented the telephone?", options: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla"], answer: "Alexander Graham Bell" },
        { question: "What is the largest mammal?", options: ["Elephant", "Blue Whale", "Giraffe"], answer: "Blue Whale" },
        { question: "How many continents are there?", options: ["5", "6", "7"], answer: "7" },
        { question: "What is the freezing point of water?", options: ["0°C", "100°C", "50°C"], answer: "0°C" },
        { question: "Who painted the Mona Lisa?", options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci"], answer: "Leonardo da Vinci" },
        { question: "How many sides does a triangle have?", options: ["2", "3", "4"], answer: "3" },
        { question: "What is the capital of Japan?", options: ["Beijing", "Seoul", "Tokyo"], answer: "Tokyo" },
]

        // Add more questions for std10 to reach desired total
    ],
    std11: [
        { question: "What is the derivative of x^2?", options: ["2x", "x^2", "2"], answer: "2x" },
        { question: "What is Avogadro's number?", options: ["6.022x10^23", "3.14", "1.6x10^-19"], answer: "6.022x10^23" },
        { question: "What is the formula for water?", options: ["H2O", "CO2", "O2"], answer: "H2O" },
        { question: "What is the chemical symbol for Gold?", options: ["Au", "Ag", "Fe"], answer: "Au" },
        { question: "Which is the heaviest naturally occurring element?", options: ["Lead", "Uranium", "Mercury"], answer: "Uranium" },
        { question: "What is Newton's third law of motion?", options: ["For every action, there is an equal and opposite reaction", "F = ma", "Energy cannot be created or destroyed"], answer: "For every action, there is an equal and opposite reaction" },
        { question: "What is the derivative of sin(x)?", options: ["cos(x)", "-cos(x)", "-sin(x)"], answer: "cos(x)" },
        { question: "Which element has atomic number 1?", options: ["Oxygen", "Hydrogen", "Carbon"], answer: "Hydrogen" },
        { question: "What is the SI unit of power?", options: ["Joule", "Watt", "Newton"], answer: "Watt" },
        { question: "Who proposed the theory of relativity?", options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei"], answer: "Albert Einstein" },
        { question: "Which gas is most abundant in Earth’s atmosphere?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide"], answer: "Nitrogen" },
        { question: "What is the square root of 64?", options: ["8", "6", "7"], answer: "8" },
        { question: "What is the formula for kinetic energy?", options: ["1/2 mv^2", "mgh", "F = ma"], answer: "1/2 mv^2" },
]
        // Add more questions for std11 to reach desired total
    ],
    std12: [
        { question: "What is the integral of x?", options: ["x^2/2", "ln(x)", "x"], answer: "x^2/2" },
        { question: "What is Planck's constant?", options: ["6.626x10^-34", "9.8", "3x10^8"], answer: "6.626x10^-34" },
        { question: "What is 10 + 15?", options: ["20", "25", "30"], answer: "25" },
        { question: "What is 9 squared?", options: ["81", "49", "27"], answer: "81" },
        { question: "What is the speed of light in a vacuum?", options: ["3x10^8 m/s", "2x10^8 m/s", "1.5x10^8 m/s"], answer: "3x10^8 m/s" },
        { question: "What is Planck's constant?", options: ["6.626x10^-34 Js", "3.14", "9.81 m/s^2"], answer: "6.626x10^-34 Js" },
        { question: "What is the formula for gravitational force?", options: ["Gm1m2/r^2", "ma", "F = qE"], answer: "Gm1m2/r^2" },
        { question: "Which type of bond involves sharing electrons?", options: ["Ionic bond", "Covalent bond", "Metallic bond"], answer: "Covalent bond" },
        { question: "What is the value of Avogadro's number?", options: ["6.022x10^23", "9.81 m/s^2", "1.6x10^-19 C"], answer: "6.022x10^23" },
        { question: "What is the pH of a neutral solution?", options: ["7", "0", "14"], answer: "7" },
        { question: "What is the derivative of e^x?", options: ["e^x", "1", "ln(x)"], answer: "e^x" },
        { question: "What is the main gas in Earth's atmosphere?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen"], answer: "Nitrogen" },
        { question: "What is the atomic number of Carbon?", options: ["6", "12", "8"], answer: "6" },
        { question: "What is the result of integrating a constant?", options: ["Constant * x", "0", "1"], answer: "Constant * x" },
]

        // Add more questions for std12 to reach desired total
    ],
};

// Variables
let selectedLevel = "";
let currentQuestionIndex = 0;
let score = 0;
let selectedOption = "";

// Start Quiz
function startQuiz(level) {
    selectedLevel = level;
    currentQuestionIndex = 0;
    score = 0;
    selectedOption = "";
    updateScoreDisplay();
    document.getElementById("level-selection").style.display = "none";
    document.getElementById("quiz-content").style.display = "block";
    loadQuestion();
}

// Load Question
function loadQuestion() {
    const questionData = quizData[selectedLevel][currentQuestionIndex];
    document.getElementById("question").textContent = questionData.question;
    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";

    questionData.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => selectOption(option, button);
        optionsDiv.appendChild(button);
    });
}

// Select an option and highlight it
function selectOption(option, button) {
    selectedOption = option;

    // Clear previous selection highlights
    document.querySelectorAll("#options button").forEach(btn => {
        btn.classList.remove("selected");
    });
    
    // Highlight selected button
    button.classList.add("selected");
}

// Submit Answer
function submitAnswer() {
    if (!selectedOption) {
        alert("Please select an option!");
        return;
    }

    const correctAnswer = quizData[selectedLevel][currentQuestionIndex].answer;
    if (selectedOption === correctAnswer) {
        score += 4;
    } else {
        score -= 1;
    }

    updateScoreDisplay();

    selectedOption = "";
    currentQuestionIndex++;

    if (currentQuestionIndex < quizData[selectedLevel].length) {
        loadQuestion();
    } else {
        endQuiz();
    }
}

// Update score display
function updateScoreDisplay() {
    document.getElementById("current-score").textContent = score;
}

// End Quiz
function endQuiz() {
    document.getElementById("quiz-content").style.display = "none";
    document.getElementById("result").style.display = "block";
    document.getElementById("final-score").textContent = `Your final score is: ${score}`;
}

// Reset Quiz
function resetQuiz() {
    document.getElementById("result").style.display = "none";
    document.getElementById("level-selection").style.display = "block";
    updateScoreDisplay();
}
