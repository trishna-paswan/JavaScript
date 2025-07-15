const accountId = 144554  // Value is locked
let accountEmail = "trishnapaswan19@gmail.com"
var accountPassword = "1234567890"
accountCity = "Kolkata"
let accountState;

/*
Prefer not to use `var` as it has function scope and can lead to unexpected behavior.
*/

// accountId = 2 // Attempting to change a constant variable will throw an error

accountEmail = "tp@gmail.com"
accountPassword = "newpassword123"
accountCity = "Mumbai"

console.log("Account ID:", accountId);
console.log( "Account Email:", accountEmail);
console.table([accountEmail, accountPassword, accountCity, accountState]);