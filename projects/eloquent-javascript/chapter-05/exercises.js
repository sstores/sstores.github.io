// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
//Use the reduce method in combination with the concat method to “flatten” an array of arrays into a single array that has all the elements of the original arrays. 


function flatten(array) {
 array.reduce((arrTotal, curArray) => arrTotal.concat(curArray), []);

}

//console.log(arrays.reduce((flat, current) => flat.concat(current), []));

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

//function loop(value, testFunc, updateFunc, bodyFunc) {
  //Each iteration, it first runs the test function on the current loop value and stops if that returns false. 
  //Then it calls the body function, giving it the current value. 
  //Finally, it calls the update function to create a new value and starts from the beginning.
  function loop(start, testfunc, updatefunc, bodyfunc) {
  for (let value = start; testfunc(value); value = updatefunc(value)) {
    bodyfunc(value);
  }
}


// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
//Implement every as a function that takes an array and a predicate function as parameters. Write two versions, one using a loop and one using the some method.

function every(array, predicate) {
  for (let element of array) {
    if (!predicate(element)) return false;
  }
  return true;
}

function every2(array, predicate) {
  return !array.some(element => !predicate(element));
}



// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
//Write a function that computes the dominant writing direction in a string of text. 
//Remember that each script object has a direction property that can be "ltr" (left to right), "rtl" (right to left), or "ttb" (top to bottom).
//The dominant direction is the direction of a majority of the characters that have a script associated with them. 
//The characterScript and countBy functions defined earlier in the chapter are probably useful here.

function dominantDirection(text) {
  let counted = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : "none";
  }).filter(({name}) => name != "none");

  if (counted.length == 0) return "ltr";

  return counted.reduce((a, b) => a.count > b.count ? a : b).name;
}


// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
