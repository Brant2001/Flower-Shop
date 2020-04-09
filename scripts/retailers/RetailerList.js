/*
    This module is resposible for receiving other modules and 
    manipulating them to render our retailer list to the DOM
*/

import { Retailer } from "./Retailer.js"
import { getRetailers, useRetailers } from "./RetailersDataProvider.js"

// Sets a target of our HTML file for our render function
const contentTarget = document.querySelector(".retailerList")


const renderRetailers = () => {
    getRetailers().then(() => {
        const allTheRetailers = useRetailers()

        contentTarget.innerHTML = allTheRetailers.map(
            (currentRetailerObject) => {
            const theFoundRetailer = Retailer(currentRetailerObject)
            return theFoundRetailer
            }
        ).join("")
    })
}

export const RetailerList = () => {
    renderRetailers();
  };