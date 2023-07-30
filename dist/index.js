"use strict";
let sales = 4567;
let course = 'java';
let isPublished = true;
let level;
level = 3;
level = 'hard';
function render(document) {
    console.log(document);
}
let numbers = [23, 45, 56, 76, 5, 65, 45];
let user = [45, false, 'rock', 45];
console.log(user);
var Size;
(function (Size) {
    Size["Small"] = "s";
    Size["Medium"] = "m";
    Size["Large"] = "l";
})(Size || (Size = {}));
let mySize = Size.Medium;
console.log(mySize);
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 2023)
        return income * 1.2;
    return income * 1.3;
}
const tax = calculateTax(100000, 2022);
console.log("Tax:", tax);
let employee = {
    id: 23,
    name: "ram",
    retire: (date) => {
        console.log(date);
    }
};
employee.name = 'rock';
console.log(employee);
function kgTolbs(weight) {
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
kgTolbs(10);
kgTolbs('10kg');
let textBox = {
    drag: () => { },
    resize: () => { }
};
let quality = 50;
//# sourceMappingURL=index.js.map