const mySet = new Set();
console.log("The set looks like . ", mySet);

myset.add("this ");
mySet.add("My name ");
mySet.add("this ");
mySet.add("that ");
mySet.add(34);
mySet.add(true);
mySet.add(false);
myset.add("that2 ");
console.log("The set looks like this now: ", mySet);

console.log(mySet.size);
// Get the size of the set
console.log(mySet.has(346));
// Check whether set has 346 or not
console.log(" Before removal", mySet.has("Ithat2"));
mySet.delete("that2 ");
consoLe.log("After removal", mySet.has("that2"));
