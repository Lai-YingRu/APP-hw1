//1
function b1(){
  var myVar;
  console.log(myVar);
}

function a1(){
  var myVar = 1;
  b1();
  console.log(myVar);
}

myVar= 2;
console.log(myVar);
a1();

//2
function bb1(){
  // var myVar2;
  console.log(myVar2);
}

function aa1(){
  var myVar2 = 1;
  bb1();
  console.log(myVar2);
}

myVar2= 2;
console.log(myVar2);
aa1();

//3

function aaa1(){
  var myVar3 = 1;
  function bbb1(){
  // var myVar3;
  console.log(myVar3);
}
  bbb1();
  console.log(myVar3);
}

myVar3= 2;
console.log(myVar3);
aaa1();

//4
var firstname = 'Simon';
var addSurname = ()=>{
  var surname = 'Helen';
  var fullname=firstname+' '+ surname;
  console.log(fullname);
}
addSurname();

var firstname = 'Simon';
var addSurname = ()=>{
  var surname = 'Helen';
  var fullname=firstname+' '+ surname;
  var firstname='David';
  console.log(fullname);
}
addSurname();
