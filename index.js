function hiMom(momName) {
    return "Hi ".concat(momName);
}
var user = { firstName: "mom", lastName: "momerson" };
function printPointCoordinates(point) {
    return "(".concat(point.x, ", ").concat(point.y, ")");
}
function findLineLength(point1, point2) {
    // double star is exponentiation, since you'll forget that once you read this comment again
    var length = Math.pow((point2.x - point1.x), 2) + Math.pow((point2.y - point1.y), 2);
    length = Math.sqrt(length);
    return length;
}
var zerozero = { x: 0, y: 0 };
var oneone = { x: 1, y: 1 };
console.log(printPointCoordinates(zerozero));
console.log(findLineLength(zerozero, oneone));
