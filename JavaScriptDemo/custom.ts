//JAVASCRIPT Tutorial 

import { Company } from "./Company";
import  Employee from "./Employee";
import { MYNAME, SpService } from "./SpService";

MYNAME

//import { Employee } from "./Employee";

/*
 * @author: Tesfaye Gari 
 * @source: https://github.com/tesfayegari
 */
//Variables: Temporary storage we use keyword var or let 
var a: string;
a = "Tesfaye";
let x = 5 / 2;
//Data Types number, boolean, string, undefined, null, array, object 
let y = 6; // y is number 
let isItRaining = true;
let myName = "Tesfaye";// myName is a string 
let char = "a";
a = '';
//array: special kind of data (Collection)
let even = [2, 4, 6, 8, 10];
//Number data type operators +. / * - %(Modulus)

let students = ["Hayat", "Dagim", "Leyu", "Demis", "Abel"];

//student as an object 
let s1: Student = {
  name: "Hayat",
  email: "hayat@email.com",
  phone: "456-258-3658",
  dob: '',
  id: 5
};
let s2: Student = {
  name: "Dagim",
  email: "dagim@email.com",
  phone: "452-258-3658",
  id: 3,
  dob: "4/1/2000"
};

class Person {
  name: string;
  dob;
  address?: string;
};

class Student extends Person {
  email = "tesfaye@email.com";
  phone;
  id;
};

interface Animal {
  type;
  name;
  dob;
}

let puppy: Animal;



let s3 = new Student();
let kitty = { name: "Kitty", type: "Pet", dob: "", age: 4 };
puppy = kitty;

let john = new Person();


let students2 = [
  { name: "Hayat", email: "hayat@email.com" },
  { name: "Dagim", email: "Dagim@email.com" },
  { name: "Abel", email: "Abel@email.com" },
  { name: "Tesfaye", email: "Tesfaye@email.com" },
];

// Operators + - * / % are mathematical functions 
//= assignment operator
//Comparison operators equality, greater less greater or equal not eqal less or equal ... 
/*
== equality
!== not equality
=== Similar (when value and type is same)
!=== 
<
> 
<=
>= 
&& and 
|| OR
*/

let a1 = 5;
let b= 10; 

//Conditional statements if else statement, Switch case statement, Tertialry operator 

/*Synatax of If else statemtns 
if(Expression) {
//if expression is true
} else {
 when expression is false
}
*/


if ( students2.length > 10 ) {
  //Shout out more than 10
} else {
//shout out it is less than or equal to 10 
}

//Looping for loop, while loop, do while loop, 

/*For loop Syntax 
for (initilization; expression; action) {
  //Looping statements
}
*/

for( let num = 1; num <=10; num = num + 2){

  //display num
  console.log('Displaying ', num)
}


let e = new Employee(1, "Tesfaye Gri", "4/1/2000");

let c = new Company();
c.name="MTM Consolting Group";

e.setCompany(c);


let service = new SpService();
service.createItem("https://sp.sharepoint.com", "Customers", "");









