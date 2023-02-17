interface Person {
  firstName: string;
  lastName: string;
}

function hiMom(momName: Person) {
  return `Hi ${momName}`;
}

let user = { firstName: "mom", lastName: "momerson" };

interface Point {
  x: number;
  y: number;
}

function printPointCoordinates(point: Point): string {
  return `(${point.x}, ${point.y})`;
}

function findLineLength(point1: Point, point2: Point): number {
  // double star is exponentiation, since you'll forget that once you read this comment again
  let length: number = (point2.x - point1.x) ** 2 + (point2.y - point1.y) ** 2;
  length = Math.sqrt(length);
  return length;
}

let zerozero: Point = { x: 0, y: 0 };
let oneone: Point = { x: 1, y: 1 };
console.log(printPointCoordinates(zerozero));
console.log(findLineLength(zerozero, oneone));
