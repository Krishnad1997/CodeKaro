// Create a function calculateNetSalary(name, salary) that deducts 10% TDS and 5% PF, then returns the final in-hand salary. Call the function for every employee.

let employees = [
  { name: "Aman", salary: 50000 },
  { name: "Priya", salary: 75000 },
  { name: "Rahul", salary: 62000 },
  { name: "Neha", salary: 48000 },
  { name: "Karan", salary: 90000 }
];

const calculateNetSalary = (name, salary) => {
  let tds = salary * 10 / 100;
  let pf = salary * 5 / 100;
  let netSalary = salary - tds - pf;
  return netSalary;
}

employees.forEach(employee => {
  console.log(`${employee.name}: ${calculateNetSalary(employee.name, employee.salary)}`);
});
