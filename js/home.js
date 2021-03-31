'use strict';
let isHardmode = false;
const hardModeElem = document.getElementById("hardmode");

hardModeElem.addEventListener("click",hardModeHandler);
function hardModeHandler(event) {
    isHardmode = true;
    let stringifiedDifficulty = JSON.stringify(isHardmode);
    localStorage.setItem("difficulty",stringifiedDifficulty);
}