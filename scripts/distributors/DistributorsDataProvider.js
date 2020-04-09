/*
    This module is resposible for the managment 
    and operation of the distributor data
*/

// Sets the value of "distributors" to an empty array
let distributors = []

// this grabs the distributors from the server and puts them in the empty array
export const getDistributors = () => {
    return fetch('http://localhost:8088/distributors')
        .then(response => response.json())
        .then(parsedDistributors => {
            distributors = parsedDistributors
        })
}

// Provides a copy of our data and exports it to be used other places
export const useDistributors = () => distributors.slice()