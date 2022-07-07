// let reg = /Soham/g; // global search
let reg = /Soham/i; // case insensitive
// console.log(reg.source);

const str = "Soham is a good boy";
let r = reg.exec(str);
console.log(r);
console.log(r.input);
console.log(r.index);

let re = reg.test(str);
console.log(re);

let res = str.match(reg);
console.log(res);

let rw = str.search(reg);
console.log(rw);

let str1 = str.replace(reg, "Soham32");
console.log(str1);

// meta characters
let regex =  /^Soham/; // expression matches from start of string
regex = /Soham$/;  // expression matches from end of string
regex = /^Soham$/;  // expression matches from start and end of string
regex = /Soham/;    // expression matches anywhere in the string
regex = /S.ham/;   // expression matches any character except new line
regex = /S*ham/;   // expression matches any character 0 or more times
regex = /S+ham/;   // expression matches any character 1 or more times
regex = /S?ham/;   // expression matches any character 0 or 1 time  
regex = /S\*ham/; // expression matches any character except new line


// character sets
regex = /S[a-z]ham/; // expression matches any character between a and z
regex = /S[^a-z]ham/; // expression matches any character except a to z
regex = /S[a-z]ham/; // expression matches any character between a and z
regex = /S[a-zA-Z]ham[0-9]/; // expression matches any character between a and z and ham and any character between 0 and 9

// quantifiers
regex = /S{2}ham/; // expression matches any character 2 times
regex = /S{0,2}ham/; // expression matches any character 0 to 2 times

// Grouping
regex = /(Soham)/; // expression matches any character 2 times
regex = /(Soham){2}/; // expression matches any character 2 times
regex = /(Soham)ham/; // expression matches any character 2 times
regex = /(Soham)([0-9])/; // expression matches any character 2 times

// character classes
regex = /\w ham/; // expression matches any word character
regex = /\W ham/; // expression matches any non word character
regex = /\d ham/; // expression matches any digit
regex = /\D ham/; // expression matches any non digit
regex = /\s ham/; // expression matches any white space
regex = /\S ham/; // expression matches any non white space
regex = /\bham\b/; // expression matches any word boundary
regex = /\Bham\B/; // expression matches any non word boundary

// assertions
regex = /S(?=y)/; 
regex = /S(?!y)/; 
