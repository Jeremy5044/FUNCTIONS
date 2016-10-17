// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// ---------------------

function max(x,y){
    if (x>y) {
    	return x;
    }else{
    	return y;
    }
};
max(2,3)

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(x,y,z){
    if(x>= y && x >=z){return x;}
if (y>=x && y>= z){return y;}
return z;
};
maxOfThree(6,3,6)
// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char){
	var vowel=char.toLowerCase();
  if (vowel==="a"){
    return true;
  }else if (vowel==="e"){
    return true;
  }else if (vowel==="i"){
    return true;
  }else if (vowel==="o"){
    return true;
  }else if(vowel==="u"){
    return true;
  }else{
    return false;
  }
  
};

console.log("char");

// ---------------------
// Write a function translate() that will translate a text into 
//"Rovarspraket". That is, double every consonant and place an occurrence of 
//"o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------


	function translate (phrase) {
  var newPhrase = " ";
  for (var count = 0; count < phrase.length; count++) {
    var letter = phrase[count];
    if (cleanerIsVowel(letter) || letter === " ") {
      newPhrase += letter;
    } else {
      newPhrase += letter + "o" + letter;
    }
  return newPhrase;
}

   translate("these are some words");
}


// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

	function reverseAlt (string) {
  var letters = [];
  for (var count =0;count< string.length; count++) {
    var letter = string[count];
    letters.unshift(letter);
  }
  return letters.join("");
}

  