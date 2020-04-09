/*
    This module is resposible for receiving other modules and 
    manipulating them to render our retailer list to the DOM
*/

import { getRetailers, useRetailers } from "./RetailersDataProvider.js";
import { useDistributors } from "../distributors/DistributorsDataProvider.js";
import { Retailer } from "./Retailer.js";

// Sets a target of our HTML file for our render function
const contentTarget = document.querySelector(".retailerList");

const renderRetailers = () => {
  getRetailers().then(() => {
    const allTheRetailers = useRetailers()
    const allTheDistributors = useDistributors()

    contentTarget.innerHTML = allTheRetailers
      .map((currentRetailerObject) => {
        const theFoundDistributor = allTheDistributors.find(
          (currentDistributorObject) => {
            return (
              currentRetailerObject.distributorId === currentDistributorObject.id
            )
          }
        )
        const retailerHTML = Retailer(currentRetailerObject, theFoundDistributor)
        return retailerHTML
      })
      .join("")
  })
}

export const RetailerList = () => {
  renderRetailers()
}
