// Using the users array, print:

// Total users

// Number of adults (18+)

// Number of minors (<18)

// Name of the oldest user

// Average age of all users

let users = [
  { name: "Aman", age: 16 },
  { name: "Priya", age: 22 },
  { name: "Rahul", age: 18 },
  { name: "Neha", age: 14 },
  { name: "Karan", age: 27 },
  { name: "Simran", age: 31 },
  { name: "Vikram", age: 45 },
  { name: "Riya", age: 19 }
];

let totalUsers = users.length;
let adults = 0;
let minors = 0;
let oldestUser = users[0];
let totalAge = 0;

for (let i = 0; i < users.length; i++) {

    // Count adults and minors
    if (users[i].age >= 18) {
        adults++;
    } else {
        minors++;
    }

    // Find oldest user
    if (users[i].age > oldestUser.age) {
        oldestUser = users[i];
    }

    // Add ages
    totalAge += users[i].age;
}

let averageAge = totalAge / totalUsers;

console.log("Total users:", totalUsers);
console.log("Number of adults:", adults);
console.log("Number of minors:", minors);
console.log("Oldest user:", oldestUser.name);
console.log("Average age:", averageAge);