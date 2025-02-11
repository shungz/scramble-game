const words = [
    { word: "apple", hint: "A popular fruit." },
    { word: "table", hint: "Furniture with four legs." },
    { word: "chair", hint: "You sit on it." },
    {word: "Lagos",  hint:  "city with the worst traffic in Nigeria"},
    { word: "ocean", hint: "A vast body of water." },
    { word: "planet", hint: "Earth is one of them." }
];

let currentWord = "";
let scrambledWord = "";
let currentHint = "";
let score = 0;

function shuffleWord(word) {
    return word.split('').sort(() => Math.random() - 0.5).join('');
}

function loadNewWord() {
    let randomIndex = Math.floor(Math.random() * words.length);
    currentWord = words[randomIndex].word;
    currentHint = words[randomIndex].hint;
    scrambledWord = shuffleWord(currentWord);
    document.getElementById("scrambled-word").textContent = scrambledWord;
    document.getElementById("hint").textContent = "Hint: " + currentHint;
    document.getElementById("message").textContent = "";
    document.getElementById("user-input").value = "";
    document.getElementById("user-input").focus();
    document.getElementById("submit-button").disabled = false; // Ensure button is re-enabled
}

function checkGuess() {
    let userGuess = document.getElementById("user-input").value.toLowerCase();
    if (userGuess === currentWord) {
        document.getElementById("message").textContent = "Correct!";
        document.getElementById("message").className = "correct";
        score++;
        document.getElementById("score").textContent = score;
        setTimeout(loadNewWord, 1000);
    } else {
        document.getElementById("message").textContent = "Try again!";
        document.getElementById("message").className = "incorrect";
    }
}

function handleKeyPress(event) {
    if (event.key === "Enter") {
        checkGuess();
    }
}

function enableSubmit() {
    document.getElementById("submit-button").disabled = false;
}

loadNewWord();