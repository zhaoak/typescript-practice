interface Person {
  firstName: string;
  lastName: string;
}

function hiMom(momName: Person) {
  return "Hi " + momName;
}

let user = { firstName: "mom", lastName: "momerson" };

document.body.textContent = hiMom(user);
