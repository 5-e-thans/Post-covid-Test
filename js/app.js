'use strict';
const imgElem = document.getElementById('actor-img');
const finalResultsElem = document.getElementById('finalScore');


let score = 0;
let counter = 0;
let isHardmode = false;

const shows = ['The Last Blockbuster',
    'Hell on Wheels',
    'The Crown',
    'Black Mirror',
    'Golden Girls',
    'Cobra Kai',
    'Stranger Things',
    'Peaky Blinders',
    'Ozark',
    'Shameless',
    'Alone',
    'Good Girls',
    'Bloodline',
    'Dead to Me',
    'Godless',
    'Jericho',
    'Queen\'s Gambit',
    'Orange is the New Black',
    'The Witcher',
    'Tiger King',
    "Schitt's Creek",
    "Outlander",
    'Riverdale'
];

const actors = ['Bill Hader',
    'Jack Black',
    'Catherine O\'Hara',
    'Stanley Tucci',
    'Billy Bob Thorton',
    'Bruce Willis',
    'Heath Ledger',
    'Marisa Tomei',
    'Gaten Matarazzo',
    'Úrsula Corberó',
    'Joey King',
    'Jason Bateman',
    'Joey Batey',
    'Anya Chalotra',
    'Harry Melling',
    'Mindy Kaling',
    'Jonas Gerzabek',
    'Cillian Murphy',
    'Regé-Jean Page',
    'Taylor Schilling',
    'Henry Cavill',
    'Joe Exotic',
    'Anya Taylor-Joy',
    'Millie Bobby Brown',
    'Eugene Levy',
    'William Zabika',
    'Phoebe Dynevor'
];

//constructor for all the objects
function Actor(name, show, path) {
    this.name = name;
    this.show = show;
    this.path = path;
    Actor.all.push(this);
}

// holds all instances of the Person object
Actor.all = [];


new Actor('Cillian Murphy', 'Peaky Blinders', 'imgs/CM Peaky Blinders.jpg');
new Actor('Regé-Jean Page', 'Bridgerton', 'imgs/Regé-Jean Page Bridgerton.jpg');
new Actor('Taylor Schilling', 'Orange is the New Black', 'imgs/OITNB Taylor Schilling.jpg');
new Actor('Henry Cavill', 'The Witcher', 'imgs/Witcher.jpg');
new Actor('Joe Exotic', 'Tiger King', 'imgs/Tiger King.jpeg');
new Actor('Anya Taylor-Joy', "Queen's Gambit", 'imgs/Queens Gambit.jpg');
new Actor('Millie Bobby Brown', 'Stranger Things', 'imgs/MBB StrangerThings.jpg');
new Actor('Eugene Levy', "Schitt's Creek", 'imgs/eugene-levy-schitts-creek.jpg');
new Actor('William Zabika', 'Cobra Kai', 'imgs/Cobra.jpg');
new Actor('Phoebe Dynevor', 'Bridgerton', 'imgs/Phoebe Dynevor Bridgerton.jpeg');

let currentImage = Actor.all[0];
console.log(currentImage);

// creates the shows and actors that are given as answer choices
Actor.prototype.getAnswer = function () {
    const actorNamesElem = document.getElementById('actorNames');
    const showNamesElem = document.getElementById('showNames');
    let temp = [];
    let optionElem;

    //Start 'actors' part of the function//

    //Selects which actors will be shown as options
    shuffle(actors);

    let nameCounter = 0;
    let nameIndex = 0;
    while (nameCounter < 3 && nameIndex < actors.length) {
        if (this.name !== actors[nameIndex]) {
            temp.push(actors[nameIndex])
            nameCounter += 1;
        }
        nameIndex += 1;
    }

    temp.push(this.name);
    shuffle(temp);

    //This allows them to be a part of the dropdown
    optionElem = document.createElement('option');
    optionElem.value = 'Name';
    optionElem.textContent = 'Name';
    actorNamesElem.appendChild(optionElem);

    for (let answers of temp) {
        optionElem = document.createElement('option');
        optionElem.value = answers;
        optionElem.textContent = answers;
        actorNamesElem.appendChild(optionElem);
    }
    //End 'actors' part of the fuction//

    // 'Show' part of the function
    temp = [];

    shuffle(shows);

    let showCounter = 0;
    let showIndex = 0;
    while (showCounter < 3 && showIndex < shows.length) {
        if (this.show !== shows[showIndex]) {
            temp.push(shows[showIndex])
            showCounter += 1;
        }
        showIndex += 1;
    }

    temp.push(this.show);

    shuffle(temp);

    optionElem = document.createElement('option');
    optionElem.value = 'Show';
    optionElem.textContent = 'Show';
    showNamesElem.appendChild(optionElem);

    for (let answers of temp) { 
        optionElem = document.createElement('option');
        optionElem.value = answers;
        optionElem.textContent = answers;
        showNamesElem.appendChild(optionElem);
    }
}

function setScore() {
    let stringifiedScores = JSON.stringify(score);
    localStorage.setItem('scores', stringifiedScores);
}

// Event Hander
const handleAnswer = function (event) {
    event.preventDefault();
    counter += 1;

    let userAns = event.target.actor.value;

    console.log('usrAns = ', event.target.actor.value);

    if (userAns === currentImage.name) {
        score += 1;
    }


    userAns = event.target.show.value;

    if (userAns === currentImage.show) {
        score += 1;
    }

    event.target.actor.innerHTML = "";
    event.target.show.innerHTML = "";

    console.log(score);
    if (counter === 10) {
        setScore();
        formElem.removeEventListener('submit', handleAnswer);
        window.location.href = 'scorepage.html'
    } else {
        Actor.all[counter].getAnswer();
        imgElem.src = Actor.all[counter].path;
        currentImage = Actor.all[counter];
        if (isHardmode === true) {
            imgElem.className = "hard";
        }
    }

}
//Handler for submit
const formElem = document.getElementById('formElem');
formElem.addEventListener('submit', handleAnswer);

//This will be the shuffle function used to randomize inncorrect answers.
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i);
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

function getDifficulty() {
    if (localStorage !== null) {
        let retrievedDifficulty = localStorage.getItem("difficulty");
        let parsedDifficulty = JSON.parse(retrievedDifficulty);

        isHardmode = parsedDifficulty;
    }
}

Actor.all[counter].getAnswer();
getDifficulty();
imgElem.src = Actor.all[0].path;