// ---------------------------
// The Arrays You Will Work With
// ---------------------------
var numbers = [1,12,4,18,9,7,11,3,101,5,6];
var strings = ['this','is','a','collection','of','words'];

var instructors = [
    { firstname : 'JD', teaches : 'JavaScript'},
    { firstname : 'Tim', teaches : 'JavaScript'},
    { firstname : 'Brit', teaches : 'Ruby'},
    { firstname : 'Joe', teaches : 'iOS'},
    { firstname : 'Jake', teaches : 'JavaScript'},
    { firstname : 'Will', teaches : 'JavaScript'},
    { firstname : 'Calvin', teaches : 'JavaScript'},
    { firstname : 'James', teaches : 'Ruby'}
];



// ---------------------------
// 1. Find largest number
// ---------------------------
var number = [1,12,4,18,9,7,11,3,101,5,6];
  var largest =0;

for(count=0;count< number.length;count++){
       if (number[count] > largest) {
       	var largest=number[count];
       }
}
console.log(largest);
// ---------------------------
// 2. Find longest string
// ---------------------------
var strings = ['this','is','a','collection','of','words'];
 var longest=0;

 for(count=0;count<strings.length;++count){
 	if (strings[count]<longest){
 		var longest=strings[count];
 	}
 }
console.log(longest);
// ---------------------------
// 3. Find even numbers
// ---------------------------
var numbers = [1,12,4,18,9,7,11,3,101,5,6];
 even =[];
for (var i =0;i< numbers.length; ++i) {
	if ((numbers[i]%2) === 0){
	even.push(numbers[i]);

 	}
}

console.log(even);


// ---------------------------
// 4. Find odd numbers
// ---------------------------


// ---------------------------
// 5. Find words that contain `is`
// ---------------------------
var strings = ['this','is','a','collection','of','words'];

console.log(strings[1]);
// ---------------------------
// 6. Join Both Arrays Together
// ---------------------------
var numbers = [1,12,4,18,9,7,11,3,101,5,6];
var strings = ['this','is','a','collection','of','words'];
var c=numbers.concat(strings);

console.log(c);



// ---------------------------
// 7. Use the Instructors array and find all that teach JavaScript, 
//    then sort them alphabetically
// ---------------------------

var instructors = [
    { firstname : 'JD', teaches : 'JavaScript'},
    { firstname : 'Tim', teaches : 'JavaScript'},
    { firstname : 'Brit', teaches : 'Ruby'},
    { firstname : 'Joe', teaches : 'iOS'},
    { firstname : 'Jake', teaches : 'JavaScript'},
    { firstname : 'Will', teaches : 'JavaScript'},
    { firstname : 'Calvin', teaches : 'JavaScript'},
    { firstname : 'James', teaches : 'Ruby'}
];
var teaches1 =firstname;
for(count=0;count<teaches1.sort;count++){
 	if (instructors[count]<teaches1){
 		var teaches1=instructors[count];
 	}
 }
console.log(teaches1);










