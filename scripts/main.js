import { getFlowers } from "./flower/FlowerDataProvider.js";
import { FlowerList } from "./flower/FlowerList.js";
import { getRetailers } from "./retailers/RetailersDataProvider.js";
import { RetailerList } from "./retailers/RetailerList.js";
import { getDistributors } from "./distributors/DistributorsDataProvider.js";



getFlowers()
        .then(FlowerList);

getRetailers()
        .then(getDistributors)
        .then(RetailerList)