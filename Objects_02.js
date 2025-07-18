const course = {
    title: "JavaScript Basics", 
    price: 199,
    isAvailable: true,
}

console.log(course); // Output: { title: 'JavaScript Basics', price: 199, isAvailable: true }
console.log(course.title); // Output: JavaScript Basics

const {title} = course; // Destructuring to extract title property 
console.log(title); // Output: JavaScript Basics

const {isAvailable: avail} = course; // Renaming destructured property
console.log(avail); // Output: true

// JSON (JavaScript Object Notation) is a format for structuring data
{
    name : "Trishna Paswan",
    age: 19,
    isStudent: true,
    subjects: ["Math", "Science", "English"],
}
