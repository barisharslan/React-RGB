# React RGB Guessing Game

This is a redo of an earlier project I did as part of Colt Steele's Web Dev class on Udemy. The game is simple, it gets a random RGB color, then generates 5 other random colors. It then shuffles them around and displays each as a tile on the screen. The aim of the game is to guess the correct color based on the given code. I added a difficulty feature as a challenge to myself, and it worked out pretty well. In short, the higher the difficulty, the more similar the colors start becoming, AKA the closer the generated RGB codes are to the solution color. 

# Components

## App
+ The main container component for the entire app. 
+ Will most likely be the sole component that will have any state
+ Keeps track of the solution color
+ Should handle logic of creating the other colors and shuffling the array
+ Passes colors to Tiles component
+ Will also need to keep track of which tiles have been clicked. 
+ Later it will most likely keep track of the difficulty as well.

## Header
+ Will simply display the title of the app, and the solution color

## Tiles
+ The Tiles component is the main body of the app, where the 6 individual Tile components will be placed. 
+ This component shouldn't do anything other than display the given colors 

## Tile 
+ The individual squares of color. 
+ Currently they display the RGB code they are passed as text
+ Later will actually display that code 
+ Should listen for clicks which will trigger a clickHandler in App



# Log

## 3/30/2019
+ Set up project with create-react-app
+ Created Header, Tiles, and Tile components 