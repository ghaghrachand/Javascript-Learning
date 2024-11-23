let name ="chand"
let count = 55
// console.log(name+ " " +count);
// The previous one is old method when we want to concatenate the string or differetnt Data

// console.log(`hello, ${name} this side!! & my count Number is ${count}`);
//this is called string interpolitation

const city = new String("Nashik")
// console.log(city.fontcolor('red'));
console.log(city.length);
console.log(city.toLocaleUpperCase());
console.log(city.charAt(2));
console.log(city.indexOf('h'));
console.log(city.substring(2,3));
//slice(take negative value)
console.log(city.slice(-2,5));
//trim (remove whitespaces)
const place =   "   Junagadh   --     " ;
console.log(place.trim());

let url = "http://chand%20ghaghra"
console.log(url.replace('%20','&&'));
console.log(place.split('--'));
