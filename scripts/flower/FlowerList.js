/*
    This module is resposible for receiving other modules and 
    manipulating them to render our flower list to the DOM
*/

import { getFlowers, useFlowers } from "./FlowerDataProvider.js"
import { Flower } from "./Flower.js"

// Sets a target of our HTML file for our render function
const contentTarget = document.querySelector(".flowerList")


const renderFlowers = () => {
    getFlowers().then(() => {
        const allTheFlowers = useFlowers()

        contentTarget.innerHTML = allTheFlowers.map(
            (currentFlowerObject) => {
            const theFoundFlower = Flower(currentFlowerObject)
            return theFoundFlower
            }
        ).join("")
    })
}

export const FlowerList = () => {
    renderFlowers();
  };
  