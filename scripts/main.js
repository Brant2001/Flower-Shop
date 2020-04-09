import { getFlowers } from "./FlowerDataProvider.js";
import { FlowerList } from "./FlowerList.js";



getFlowers()
        .then(FlowerList)