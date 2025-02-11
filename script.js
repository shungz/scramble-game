document.addEventListener("DOMContentLoaded", function () {
    const words = [
        { word: "apple", hint: "A popular fruit." },
        { word: "table", hint: "Furniture with four legs." },
        { word: "chair", hint: "You sit on it." },
        { word: "lagos", hint: "City with the worst traffic in Nigeria" },
        { word: "ocean", hint: "A vast body of water." },
        { word: "planet", hint: "Earth is one of them." }
    ];

    let currentWord = "";
    let scrambledWord = "";
    let currentHint = "";
    let score = 0;

    function shuffleWord(word) {
        let array = word.split('');
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array.join('');
    }

    function loadNewWord() {
        let randomIndex = Math.floor(Math.random() * words.length);
        currentWord = words[randomIndex].word.toLowerCase(); // Normalize case
        currentHint = words[randomIndex].hint;
        scrambledWord = shuffleWord(currentWord);

        document.getElementById("scrambled-word").textContent = scrambledWord;
        document.getElementById("hint").textContent = "Hint: " + currentHint;
        document.getElementById("message").textContent = "";
        document.getElementById("user-input").value = "";
        document.getElementById("user-input").focus();
        document.getElementById("submit-button").disabled = false; // Ensure button is enabled
    }

    function checkGuess() {
        let userGuess = document.getElementById("user-input").value.trim().toLowerCase();
        
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

    function enableSubmit() {
        document.getElementById("submit-button").disabled = false;
    }

    document.getElementById("user-input").addEventListener("input", enableSubmit);
    document.getElementById("submit-button").addEventListener("click", checkGuess);

    loadNewWord();
});
