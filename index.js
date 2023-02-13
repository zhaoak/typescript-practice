"use strict";
function hiMom(momName) {
    return "Hi " + momName;
}
let user = { firstName: "mom", lastName: "momerson" };
function printPointCoordinates(point) {
    return `(${point.x}, ${point.y})`;
}
function findLineLength(point1, point2) {
    let length = (point2.x - point1.x) ** 2 + (point2.y - point1.y) ** 2;
    length = Math.sqrt(length);
    return length;
}
let zerozero = { x: 0, y: 0 };
let oneone = { x: 1, y: 1 };
console.log(printPointCoordinates(zerozero));
console.log(findLineLength(zerozero, oneone));
