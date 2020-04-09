/*
    This module is resposible for the managment 
    and operation of the flower data
*/

// Sets the value of "flowers" to an empty array
let flowers = []

// this grabs the flowers from the server and puts them in the empty array
export const getFlowers = () => {
    return fetch('http://localhost:8088/flowers')
        .then(response => response.json())
        .then(parsedFlowers => {
            flowers = parsedFlowers
        })
}

// Provides a copy of our data and exports it to be used other places
export const useFlowers = () => flowers.slice()