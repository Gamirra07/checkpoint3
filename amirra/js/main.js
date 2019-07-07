alert("it's just the beginning")
console.log("it's just the beginning")
var x=5;
var y=3;
var z=2;
alert(x+y);
alert(x-y);
alert(x/(y-z));
var myString="hello world";
alert(myString.length);
var firstString="i like";
var secondString="pizza";
var completeString=firstString+secondString;
alert(completeString);
var myString="HELLO";
var secondString="world";
alert(myString.toLowerCase());
alert(secondString.toUpperCase());
var myString="Hello there, this is a split test";
var parts=myString.split(",");
alert(parts);
var a=5;
var b=2;
var c=5;
alert(a==b);
alert(a==c);
var i;
for(i=0;i<10;i++){
    alert(i);
}
var myArray=[1,2,3,4];
var otherArray=["1,2,3"];
console.log(myArray);
var myArray=[1,2,3,4];
alert(myArray[3]) //Returns 4
var myArray=[1,2,3,4];
myArray.push(5);
alert(myArray);
var myArray=[1,2,3,4,5];
myArray.pop();
alert(myArray);
function mean(a,b,c){
    return((a+b+c)/3);
}