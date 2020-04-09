/*
    This module is resposible for the managment 
    and operation of the retailer data
*/

// Sets the value of "retailers" to an empty array
let retailers = []

// this grabs the retailers from the server and puts them in the empty array
export const getRetailers = () => {
    return fetch('http://localhost:8088/retailers')
        .then(response => response.json())
        .then(parsedRetailers => {
            retailers = parsedRetailers
        })
}

// Provides a copy of our data and exports it to be used other places
export const useRetailers = () => retailers.slice()