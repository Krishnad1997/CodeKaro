function checkString(str) {
    if (str) {
        return "Truthy";
    } else {
        return "Falsy";
    }
}

console.log(checkString("Hello"));
console.log(checkString(""));