import { getFlowers } from "./flower/FlowerDataProvider.js";
import { FlowerList } from "./flower/FlowerList.js";
import { getRetailers } from "./retailers/RetailersDataProvider.js";
import { RetailerList } from "./retailers/RetailerList.js";



getFlowers()
        .then(FlowerList);

getRetailers()
        .then(RetailerList)