//JS Basics
//Run npm test in the command line to test your solutions
module.exports = {
  reverseIt: function(string){
    let newString = string.split("").reverse().join("");
    return newString;
  },

  //uncomment and finish the reverseIt function. It will take in one parameter which is a String and
  //reverse it

  removeDups: function(arr){
    let newArr = [];
    arr.forEach(val => {
      if(newArr.indexOf(val) === -1){
        newArr.push(val)
      }
    });
    return newArr;
  },

  //uncomment and finish the removeDups function. It will take in one parameter which is an Array
  //remove all duplicates

  titleIt: function(string){
    let titleArray = [];
    let newArr = string.split(" ");
    for(let i = 0; i < newArr.length; i++){
      let wordArr = newArr[i].split("");
      wordArr[0] = wordArr[0].toUpperCase();
      let newWord = wordArr.join("")
      titleArray.push(newWord); 
    }
    return titleArray.join(" ");
  }

  //uncomment and finish the titleIt function. It will take in one parameter which is a String and
  //capitalize the first letter of each word

  // vowelCounter:

  //uncomment and finish the vowelCounter function. It will take in one parameter which is a String and
  //return the number of vowels in the string

  // isPrime:

  //uncomment and finish the isPrime function. It will take in one parameter which is a Number and
  //return true if it is prime and false if it is not

  //what is the value of foo?
  //var foo = 10 + '20';
  //uncomment the foo property and give your answer as its value

  //foo:

  //what is the outcome of the two console.logs below?
  //   var foo = "Hello";
  // (function() {
  //   var bar = " World";
  //   console.log(foo + bar);
  // })();
  // console.log(foo + bar);
  // uncomment the log1 and log2 properties and give your answers as their values

  // log1:
  // log2:
}
