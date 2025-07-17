const myArr = [1, 2, 3, 4, 5];
console.log("Array Operations");
console.log("Original Array:", myArr);
console.log(myArr[0], "is the first element of the array");

// Add an element to the end of the array
myArr.push(6);
console.log("Array after adding 6:", myArr);

// Remove the last element of the array
myArr.pop();
console.log("Array after removing last element:", myArr);

// Add an element to the beginning of the array
myArr.unshift(0);
console.log("Array after adding 0 to the beginning:", myArr);

// Remove the first element of the array
myArr.shift();
console.log("Array after removing first element:", myArr);

// Slice the array to get a sub-array
const subArr = myArr.slice(1, 3);
console.log("Sub-array from index 1 to 3:", subArr);

