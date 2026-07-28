let student = {
    name: "Amit",
    age: 20,
    grade: "A",
    address: {
        street: "123 Main St",
        city: "Anytown",
        country: "India"
    }
};

// fetch name

console.log(student.name)

// add phone number

student.phone ='123-456-7890'
console.log(student)

// Removal Grade

delete student.grade;

console.log(student)

// Change the Age

student.age = '21'
console.log(student)