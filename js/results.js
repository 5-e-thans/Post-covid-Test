'use strict'

function getScore() {
    let finalScore = localStorage.getItem('scores');
    if (finalScore !== null) {
        let parsedScore = JSON.parse(finalScore);
        console.log(parsedScore);
    }
}
const results = document.getElementById('finalScore');
results.textContent = `Your final score is ${parsedScore}`;
