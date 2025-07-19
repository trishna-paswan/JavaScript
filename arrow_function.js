const user = {
    username: "john_doe",
    price: 29.99,

    message : function() {
        console.log(`Hello, ${this.username}! Your subscription costs $${this.price}.`);
    }   
};

user.message(); // Output: Hello, john_doe! Your subscription costs $29.99. 
