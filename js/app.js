'use strict'
const imgElem = document.getElementById('actor-img');


const shows = ['The Last Blockbuster',
    'Hell on Wheels',
    'The Crown',
    'Black Mirror',
    'Peaky Blinder',
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
function Person(name, show, img) {
    this.name = name;
    this.show = show;
    this.img = img;
    Person.all.push(this);
}

// holds all instances of the Person object
Person.all = [];

new Person('Cillian Murphy', 'Peaky Blinders', 'imgs/CM Peaky Blinders.jpg');
new Person('Regé-Jean Page', 'Bridgerton', 'imgs/Regé-Jean Page Bridgertonjpeg');
new Person('Taylor Schilling', 'Orange is the New Black', 'imgs/OITNB Taylor Schilling.jpg');
new Person('Henry Cavill', 'The Witcher', 'imgs/Witcher.jpg');
new Person('Joe Exotic', 'Tiger King', 'imgs/Tiger King.jpeg');
new Person('Anya Taylor-Joy', "Queen's Gambit", 'imgs/Queens Gambit.jpg');
new Person('Millie Bobby Brown', 'Stranger Things', 'imgs/MBB StrangerThings.jpg');
new Person('Eugene Levy', "Schitt's Creek", 'imgs/eugene-levyschitts-creek.jpg');
new Person('William Zabika', 'Cobra Kai', 'imgs/Cobra.jpg');
new Person('Phoebe Dynevor', 'Bridgerton', 'imgs/Phoebe Dynevor Bridgerton.jpeg');

// TODO: add images to the screen
function renderImages() {
    console.log(Person.all[0].img);
    imgElem.src = Person.all[0].img;
    // const imgElem.src = Person.img;
    // const imgElem.textContent = `This is actor in show`
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

renderImages();