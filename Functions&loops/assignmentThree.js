// Using forEach(), print the names of users whose age is 18 or above.

let users = [
  { name: "Aman", age: 16 },
  { name: "Priya", age: 22 },
  { name: "Rahul", age: 18 },
  { name: "Neha", age: 14 },
  { name: "Karan", age: 27 }
];

users.forEach(user => {
  if (user.age >= 18) {
    console.log(user.name);
  }
});