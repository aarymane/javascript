//primitive

/* types:strings
    Number
    Boolean-true or false
    Null-Some times we did not predict the exact reading
    like temperature if the reading is not displayed it shows null
    Undefined-in this,if we have made a variable but we have not deceided 
    the value yet.
    Symbol-
    Bigint-big integer value.
*/
const score =100;
const scoreValue=100.3

const isloggedIn=false
const outsidetemp=null
let userEmail;

const id=Symbol('123')
const anotherId=Symbol('123')

console.log(id === anotherId);

const Bignumber = 23456789098765432345678765432345678765432n;
console.log(typeof Bignumber)

//references(Non-Primitive)
//Array,objects,functions

const heros =["saktiman,naagraj,doga"]

//object in curly brcket
let myobject={
    name:"aaryeddg",
    age:34,

}

console.log(myobject);

//function(){} usual representation

const myFunction=function(){
    console.log("hello world");
}

console.log(typeof outsidetemp)
console.log(typeof Bignumber)
console.log(typeof scoreValue)
console.log(typeof myFunction)