'use strict'

const shows = [];
const actors = [];

const mainElem = document.getElementsByTagName('main');


function Person (name, show, img) {
    this.name = name;
    this.show = show;
    this.img = img;
}

const answerKey = Person.all[];

new Person('Cillian Murphy', 'Peaky Blinders', 'img/CM Peaky Blinders.jpg');
new Person('Regé-Jean Page', 'Bridgerton', 'imgs/Regé-Jean Page Bridgertonjpeg');
new Person('Taylor Schilling', 'Orange is the New Black', 'imgs/OITNB Taylor Schilling.jpg');
new Person('Henry Cavill', 'The Witcher', 'imgs/Witcher.jpg');
new Person('Joe Exotic', 'Tiger King', 'imgs/Tiger King.jpeg');
new Person('Anya Taylor-Joy', "Queen's Gambit", 'imgs/Queens Gambit.jpg');
new Person('Millie Bobby Brown', 'Stranger Things', 'imgs/MBB StrangerThings.jpg');
new Person('Eugene Levy', "Schitt's Creek", 'imgs/eugene-levyschitts-creek.jpg');
new Person('William Zabika', 'Cobra Kai', 'imgs/Cobra.jpg');
new Person('Phoebe Dynevor', 'Bridgerton', 'imgs/Phoebe Dynevor Bridgerton.jpeg');










//This will be the shuffle function used to randomize inncorrect answers.
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i);
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }