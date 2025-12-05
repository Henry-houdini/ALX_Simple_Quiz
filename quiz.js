document.addEventListener("DOMContentLoaded", function () {
    function checkAnswer() {
    // function body

    const correctAnswer = "4";

    const userAnswer = document.querySelector('input[name="quiz"]:checked').value;

    const feeback = document.getElementById("feeback");

    if (userAnswer === correctAnswer) {
        
        feeback.textContent = "Correct! Well done.";
    
    } else {
        feeback.textContent = "That's incorrect. Try again!";
    }
}

const submitBnt = document.getElementById("submit-answer");
    submitBtn.addEventListener("click", checkAnswer);

});




