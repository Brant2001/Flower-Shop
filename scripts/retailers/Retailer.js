/*
    This module is responsible for the HTML 
    representation of a single retailer
*/

export const Retailer = (RetailerObject) => {
    return `
        <article class="singleRetailer">
            <h4>${RetailerObject.name}</h4>
            <p>City: ${RetailerObject.city}</p>
            <p>State: ${RetailerObject.state}</p>
            <p>Address: ${RetailerObject.address}</p>
        </article>
    `
}