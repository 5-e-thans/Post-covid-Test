# Post-covid-Test

A pairing game to test your celebrity knowledge.

## Authors

Roman Ayalew, Kyle Hoac, Skyler Johnson, Cullen Sharp, Tim Viccari

## Problem Domain

With our Post-Covid Test we will allow users to determine if they are up to date with popular Netflix shows and actors and ready for a good old fashioned chin wag around the water cooler about it when the time eventually comes.

### MVP

The goal is to create a website that tests the user's knowledge of films and shows from being stuck at home binging on Netflix. We will create a game of ten questions matching an actor to the show or film that they were most recently in. Each question is worth two points and the score total will then be displayed to the user once all questions have been answered.

### Stretch

1. Add a hard mode of five additional questions as an option after the first round.
2. Blurred picture for hard mode.DONE! (kinda)
3. A timer added to the test.
4. Try again button. DONE!
5. About us. DONE!
6. CSS styling with transforms and animations. DONE!

## User Stories

1. As an administrator, I want to have the ability to create new options so that I can test the user with current information.

2. As a user, I want to keep track of my score so I can compare to other users.

3. As a user, I want to find out how to play the game.

4. As a user, I want to be prompted how many answers were correct and incorrect at the end of the game.

5. As a user, I want to be able to complete the game in five minutes.

## Wireframe

![Wireframe](/imgs/wireframe2.jpg)

![Wireframe](/imgs/basicwireframe.jpg)

## Domain Modeling

- Actor object.
  - name - string
  - film/show - sting
  - image - property
  - Array of correct answers
  - File path to change image

## Tech used

- HTML, CSS, Javascript

## Notes and reflections

- We had a lot of fun making this and we hope that you enjoy it!

The animation in particular took a while to get just right and making sure that the user is presented with randomized answer options without any duplicates to the right answer was also tricky. 

Another interesting thing was that even on a relativly simple program like this one it was remarkable how much needed to change as we refined out concept of how it needed to function and run. Our initial concepts of what was needed under the hood changed a couple of times as we realized that the parts would not all work together the way we had originally coded them.
