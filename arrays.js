const names = ["Alice", "Bob", "Charlie", 10, false];

const bob = names[1];

names.push("David");
names.unshift("Eve");

names.pop();
names.pop();
names.pop();

names[3] = "Frank";

const indexOfAlice = names.indexOf("Alice");

const sortedNames = names.sort();

const nameIsArray = Array.isArray(names);

console.log(names);
console.log(sortedNames);
console.log(nameIsArray);