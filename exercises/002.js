/*
Write a function called "getAllKeys" which returns an array of all the input object's keys.
Example input:
{
  name : 'Sam',
  age : 25,
  hasPets : true
}
Function's return value (output) :
['name', 'age', 'hasPets']
Do not use "Object.keys" to solve this prompt.
Note that your function should be able to handle any object passed in it.
E.g. it should also handle an input like:
{
  a : 'a',
  number : 11,
  hungry : true,
  grammyWins : 1
}
Function's return value (output):
['a', 'number', 'hungry', 'grammyWins']
Starter Code:
function getAllKeys(obj) {
  // your code here
}
*/

function getAllKeys(obj){
  var keys = [];
  var x;
  for (x in obj) {
    keys.push(x);
  }
  return keys;
}

getAllKeys({name: "wes", age: "34", location: "NC"})
console.log(getAllKeys({name: "wes", age: "34", location: "NC"}));
