/*
    This module is responsible for the HTML 
    representation of a single retailer
*/

export const Retailer = (RetailerObject, distributor) => {
    return `
        <article class="singleRetailer">
            <section class="singleRetailer__info">
                <header>
                    <h3>${RetailerObject.name}</h43>
                </header>
                <p>City: ${RetailerObject.city}</p>
                <p>State: ${RetailerObject.state}</p>
                <p>Address: ${RetailerObject.address}</p>
            </section>
            <section class="singleRetailer__distributor">
                <header>
                    <h4>We get our flowers from ${distributor.name}</h4>
                </header>
                <p>Distributor City: ${distributor.city}</p>
                <p>Distributor State: ${distributor.state}</p>
                <p>Distributor Address: ${distributor.address}</p>
            </section>
        </article>
    `
}