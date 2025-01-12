function greeter(person: string): string {
  return "Hello, " + person;
}

function greetMultiple(people: string[]): string {
  return people.map(greeter).join(', ');
}

let user = ["Alice", "Bob"];
console.log(greeter(user[0])); // Correct way to call with array element
console.log(greetMultiple(user)); // Using the new function to greet multiple people