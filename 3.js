//function expression
var greetMe = function(){
  console.log('Hi Tony!');
}
greetMe();

//arrow function expreesion
greetSam=()=>console.log('Hi Sam!');
greetSam();

//arrow function expression with parameters
greetYou=name=>console.log('Hi '+ name +'!');
greetYou('NTUE');

var square1=function(num){return num*num};
var square2= num =>{return num*num};
var square3= num =>num*num;
console.log(square1(3));
console.log(square2(2));
console.log(square3(4));
