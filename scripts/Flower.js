/*
    This module is responsible for the HTML 
    representation of a single flower
*/

export const Flower = (FlowerObject) => {
    return `
        <article class="singleFlower">
            <h4>${FlowerObject.commonName}</h4>
            <p>Color(s): ${FlowerObject.color}</p>
        </article>
    `
}