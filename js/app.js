'use strict'
const imgElem = document.getElementById('actor-img');


const shows = ['The Last Blockbuster',
    'Hell on Wheels',
    'The Crown',
    'Black Mirror',
    'Peaky Blinders',
    'Cobra Kai',
    'Stranger Things'
];

const actors = ['Bill Hader',
    'Jack Black',
    'Catherine O\'Hara',
    'Abraham Lincoln',
    'Billy Bob Thorton',
    'Bruce Willis',
    'Heath Ledger',
    'Marisa Tomei'
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
new Actor('Regé-Jean Page', 'Bridgerton', 'imgs/Regé-Jean Page Bridgertonjpeg');
new Actor('Taylor Schilling', 'Orange is the New Black', 'imgs/OITNB Taylor Schilling.jpg');
new Actor('Henry Cavill', 'The Witcher', 'imgs/Witcher.jpg');
new Actor('Joe Exotic', 'Tiger King', 'imgs/Tiger King.jpeg');
new Actor('Anya Taylor-Joy', "Queen's Gambit", 'imgs/Queens Gambit.jpg');
new Actor('Millie Bobby Brown', 'Stranger Things', 'imgs/MBB StrangerThings.jpg');
new Actor('Eugene Levy', "Schitt's Creek", 'imgs/eugene-levyschitts-creek.jpg');
new Actor('William Zabika', 'Cobra Kai', 'imgs/Cobra.jpg');
new Actor('Phoebe Dynevor', 'Bridgerton', 'imgs/Phoebe Dynevor Bridgerton.jpeg');

// TODO: add images to the screen
function renderImages() {
    imgElem.src = Actor.all[0].path;
}

Actor.prototype.getAnswer = function() {
    const actorNamesElem = document.getElementById('actorNames');
    const showNamesElem = document.getElementById('showNames');
    let temp = [];
    let optionElem;

    shuffle(actors);

    for(let i = 0; i < 3; i++) {
        temp.push(actors[i]);
    }

    temp.push(this.name);

    shuffle(temp);

    for(let answers of temp) {
        optionElem = document.createElement('option');
        optionElem.value = answers;
        optionElem.textContent = answers;
        actorNamesElem.appendChild(optionElem);
    }

    temp = [];

    shuffle(shows);

    for (let j = 0; j < 3; j++) {
        temp.push(shows[j]);
    }

    temp.push(this.show);

    shuffle(temp);

    for(let answers of temp) {
        optionElem = document.createElement('option');
        optionElem.value = answers;
        optionElem.textContent = answers;
        showNamesElem.appendChild(optionElem);
    }

    //for loop to get wrong answers
}

// TODO: hit submit and move to the next question
function cycleQuestions() {

    for (let i = 0; i < array.length; i++) {
        renderImages();
    }
}

// TODO: add an event listener to submit

// TODO: create handler for submit




//This will be the shuffle function used to randomize inncorrect answers.
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i);
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

Actor.all[0].getAnswer();
renderImages();