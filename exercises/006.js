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

function convertObjectToList(obj) {
  var keyArray = Object.keys(obj);
  var converted = [];
  var tempArray = [];
  for (var i = 0; i < keyArray.length; i++) {
    tempArray.push(keyArray[i]);
    tempArray.push(obj[keyArray[i]]);
    converted.push(tempArray);
    tempArray = [];
  }
  return converted;
}
convertObjectToList({
  name: 'Holly',
  age: 35,
  role: 'producer'
});
