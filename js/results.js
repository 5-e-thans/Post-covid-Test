'use strict'

function getScore() {
    const results = document.getElementById('finalScore');
    let finalScore = localStorage.getItem('scores');
    
    if (finalScore !== null) {
        let parsedScore = JSON.parse(finalScore);
        console.log(parsedScore);
        
        results.textContent = `Your final score is ${parsedScore}`;
    }
}

getScore();