/*
Write  a function called "convertObjectToList" which converts an object literal into an array of arrays, like this:
Argument:
{
  name: 'Holly',
  age: 35,
  role: 'producer'
}
Return value:
[['name', 'Holly'], ['age', 35], ['role', 'producer']]

Note that your function should be able to handle ANY object like this, not just the exact sample provided above.

E.g., it should also be able to handle this, or any other object containing simple key-value pairs.
{
  species: 'canine',
  name: 'Bowser',
  weight: 45
}

Starter Code:
*/

// const input = {
//   name: 'Holly',
//   age: 35,
//   role: 'producer',
//   extra: 'Uh Oh'
// }

function convertObjectToList(obj) {
  const output = [];  
  for(let i = 0; i < getAllKeys(obj).length; i++){
    output[i] = [getAllKeys(obj)[i], listAllValues(obj)[i]];
  }
  return output;
}
// From previous exercises

function listAllValues(obj) {
  const arr = [];
  for(key in obj) {
    arr.push(obj[key]);
  }
  return arr;
}

function getAllKeys(obj){
  const arr = [];
  for(let key in obj) {
    arr.push(key.toString());
  }
  return arr;
}

// console.log(convertObjectToList(input));