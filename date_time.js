console.log("Date and Time Operations"); 

// Get the current date and time
const currentDate = new Date();
console.log("Current Date and Time:", currentDate);
console.log("Current Date:", currentDate.toDateString());

let myDate = new Date(2023,0,23); // January is month 0
console.log("My Date:", myDate.toDateString());

let anotherDate = new Date("2023-01-23");
console.log("Another Date:", anotherDate.toLocaleString());

let myTimeStamp = Date.now();
console.log("Current Timestamp:", myTimeStamp);

console.log(Math.floor(myTimeStamp / 1000), "seconds since January 1, 1970");

console.log("Current Year:", currentDate.getFullYear());
console.log("Current Month:", currentDate.getMonth() + 1); // Months are zero-based