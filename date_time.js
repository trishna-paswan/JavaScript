console.log("Date and Time Operations"); 

// Get the current date and time
const currentDate = new Date();
console.log("Current Date and Time:", currentDate);
console.log("Current Date:", currentDate.toDateString());

let myDate = new Date(2023,0,23); // January is month 0
console.log("My Date:", myDate.toDateString());

// Get the current date
const currentYear = currentDate.getFullYear();
