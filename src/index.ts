import { User } from "./User";
import { Company } from "./Company";

const user = new User();;
const company = new Company();

console.log(user);
console.log(company);

const element = document.getElementById('map');

new google.maps.Map(element, {
    zoom: 1,
    center: {
        lat: 0,
        lng: 0
    }
});