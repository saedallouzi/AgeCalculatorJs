// Create three functions. checkParamsFn, checkOverEighteenFn & calculateAgeFn.
// The first function checks your parameters and returns
// true if all of them are integers, whereas returns false if not.
// The second function is self explanatory.
// The third function, uses the first and second functions to check its inputs
// and returns an error message that starts with "error:"
// This function should return a rounded age.
// READING MATERIALS:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round
// https://www.w3schools.com/js/js_dates.asp
// https://www.digitalocean.com/community/tutorials/understanding-date-and-time-in-javascript
// HINT: recycling code is never bad practice.
// This functions should check the integrity of the parameters and pass true/false
function checkParamsFn(year, month, day) {
  // Write your code here
  let x=Number.isInteger(year);
  let y=Number.isInteger(month);
  let z=Number.isInteger(day);
  if (x&&y&&z)return true
  return false
}

// This functions checks if the person is or above 18 years of age, return true/false
function checkOverEighteenFn(year, month, day) {
  // Write your code here
  let today = new Date();
  let x=today.getFullYear()-18;
  if (year<x) return true ;
  if (year>x) return false ;
  // year==x
  if (month>(today.getMonth()+1)) return false;
  else if(month<(today.getMonth()+1))return true ;
  else if(month>(today.getMonth()+1))return false ;
  else if(day<(today.getDate()+1))return true;
  else return false ;
  }


  function calculateAgeFn(year, month, day) {
    // Write your code here
    var today = new Date();
    if ((!checkParamsFn(year, month, day)))return('error:one of the parameters at least is not integer');
    if ((!checkOverEighteenFn(year, month, day)))return('error:she/he is less than eighteen');
    const entiresuminDays=(year*12*30)+(month*30)+(day) ;
    const currentsuminDays=((today.getFullYear())*12*30)+((today.getMonth()+1)*30)+((today.getDate()+1)) ;
    return parseInt((currentsuminDays-entiresuminDays)/(12*30));
  }

// Look at the naming of the functions. it looks like salwaBaqer, where
// the first letter of the first word is small, while the first letter of the
// second word is Capital. This is called "Camel Casing."
// Also the Fn at the end of the function name is short for function.
// str = String, int = Integer, arr = Array, obj = Object, fn = Function
// It's best practice to name your function as to what it does, or your variable
// to what it holds.

module.exports = calculateAgeFn;