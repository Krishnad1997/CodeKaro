let shoppingList = [
    "Milk",
    "Eggs",
    "Bread",
    ["Apples", "Bananas", "Oranges"],
    ["Potatoes", "Tomatoes", "Onions"]
];

// Fetch Element
console.log(shoppingList[3][0]);

// Push Method

shoppingList[3].push("Carrots");
console.log(shoppingList[3])

// pop Method
console.log(shoppingList[3]);

shoppingList[3].pop();
console.log('pop:', shoppingList[3])

// Splice method

shoppingList[4].splice(1, 2, "Cucumbers", "Bell Peppers");
console.log('Splice:',shoppingList[4])