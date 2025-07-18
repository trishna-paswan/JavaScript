const course = {
    title: "JavaScript Basics", 
    price: 199,
    isAvailable: true,
}

console.log(course); // Output: { title: 'JavaScript Basics', price: 199, isAvailable: true }
console.log(course.title); // Output: JavaScript Basics

const {title} = course; // Destructuring to extract title property 
console.log(title); // Output: JavaScript Basics
