// document.write("Hello World");
// console.log("Hello World");
// alert("here I come");

// var name="Ochola Hillary \nOmondi";
// var age=22;
// var sex="male";
// var school="JKUAT";
// var lateForSchool=true;
// console.log(name + age);

// var add=eval('10+5');
// document.write(add);

// var add='10'*'5';
// document.write(add);

// var add=10+5.2;
// document.write(add);

// var add=10/0;
// document.write(add);

// var x=10;
// var y=5
// x+=y;
// document.write(x);

/*comparison operator*/
// var add=10;
// document.write(add==10);

//Conditional operator
/*var age=15;
var isAdult=(age<18) ? 'Too young': 'Old enough';
document.write(isAdult);
alert(isAdult);*/

// CONDITIONALS

// if, else if, else
/*var status=1;
var msg;
if(status==1){
   msg="Online";
}
else if(status==2){
    msg="Away";
}
else{
    msg="Offline";
}
console.log(msg);*/

// Switch Case
// var month=parseInt(readLine(), 10);
/*var month=11;
switch(month){
    case 1:
        console.log("January")
        break;
    case 2:
        console.log("February")
        break;
    case 3:
         console.log("March")
         break;
    case 4:
         console.log("April")
         break;
    case 5:
         console.log("May")
         break;
    case 6:
          console.log("June")
          break;
    case 7:
         console.log("July")
         break;
    case 8:
         console.log("August")
         break;
    case 9:
        console.log("September")
        break;
    case 10:
         console.log("October")
         break;
    case 11:
        console.log("November")
        break;
    case 12:
       console.log("December")
       break;
    
}*/

// LOOPS

// for(i=0;i<=10;i++){
// document.write(i +"<br>");
// console.log(i);
// }

// var expression=readLine();
// for(i=1;i<=3;i++){
// console.log(expression)
// }

// Even numbers
// for(i=0;i<=20;i+=2){
// console.log(i);
// document.write(i+'<br>')
// }

// var sec=5;
// while(sec>=0){
// document.write(sec);
// sec--;
// }

// for(i=0;i<=10;i++){
// if(i==5){
// break;
// }
// document.write(i);
// 
// }

// Do...while loop
// i=0;
// do{
// document.write(i);
// i++;
// }
// while(i<5);


// FUNCTIONS


// function hello(name, name2){
// alert("Hello there "+ name+" " + name2);
// }
// hello("Hillary", "Omondi");

// function multiply(a, b){
//    return a*b;
// }
// document.write(multiply(3,2));

// ALERT, PROMPT, CONFIRM

// var user=prompt("Hi there");
// alert(user);

// var like=confirm("Do you want to really leave the page");
// if(like==true){
// document.write("Welcome back next time.");
// } else{
// document.write("Thank you for staying with us.");
// }

// function test(number){
// while(number<5){
// number++
// }
// return number;
// }
// alert(test(9));

// function myString(name){
// return  name;
// }
// alert(myString("Hillary"));


// NESTING OBJECTS
// var person={
// name:"Hillary",
// age:23,
// DOB:{
// year:2000,
// month:"March",
// day:23
// }
// };
// alert(Object.values(person.DOB));

// OBJECT CONSTRUCTOR
// function person(name, age){
// this.name=name;
// this.age=age;
// this.changeName=function(name){
// this.name=name;
// }
// }
// var papa=new person("papa", 23);
// var omosh=new person("omondi", 22);
// var cee=new person("obiero", 20);
//  alert(papa.name);
// papa.changeName("ericko");
// alert(papa.name);

// ARRAY

// LOOPING AN ARRAY
// var names=["papa", "omosh", "obiero"];
// alert(names);
// for(n=0;n<names.length;n++){
// console.log(names[n]);
// }


// 
// let languages = new Array("HTML","CSS","JS");
// let libraries = new Array("Bootstrap", "REACT")
// 
// let front_end = languages.concat(libraries);
// document.write(front_end);
// 
// let style= languages[1].concat(libraries[0]);
// document.write(style);

// MATH
// let rand=Math.floor(Math.random()*10);
// document.write(rand)

// DATE

// let d=new Date("2 Jan, 2015, 10:42:00");
// document.write(d);
 
//  function printTime(){
    //  let d =new Date();
    //  let hrs=d.getHours();
    //  let mins=d.getMinutes();
    //  let sec=d.getSeconds();
    //  let ms=d.getMilliseconds();
    //  document.body.innerHTML=hrs+":"+mins+":"+sec+":"+ms;
    // alert('${hrs} + : + ${min} + : + ${sec}+:+ ${ms}');
// }
// setInterval(printTime, 2000);


// DOM
// Selecting Elements

// let td=document.getElementsByTagName("td");
// td[6].innerHTML="Overwritten Content";
// td[14].innerHTML="Overwritten Content";
// for(i=0;i<td.length;i++){
    // td[i].innerHTML="All are data";
//   
// }


// Changing Attributes
// let color=document.getElementById("colorType");
// color.type="color";


// Creating Elements
// let par2=document.createElement("p");
// let txt=document.createTextNode("This is a new paragraph");
// par.appendChild(txt);
// let body=document.getElementsById("catch");
// let par1=document.getElementsByTagName("p");
// body.replaceChild(par2, par1);


// EVENT HANDLERS & LISTENERS

let form=document.getElementById("form_1");
form.style.backgroundColor="aqua";
form.style.color="black";
let changeBg=document.getElementById("colorChange");
    changeBg.addEventListener("input", background)
    function background(){
        form.style.backgroundColor=changeBg.value;
    }
let txt1=document.getElementById("txt1");
let txt2=document.getElementById("txt2");
let date=new Date();
let yr=date.getFullYear();
 txt1.addEventListener("input", change);
 function change(){
    txt2.value=yr-txt1.value;
 }





//  IMAGE SLIDER

let images=[
    "charles-deluvio-Mv9hjnEUHR4-unsplash.jpg",
    "cat1.jpg",
    "Child.jpeg"
]
let pos=0;
function prev(){
    let slider=document.getElementById("slider")
    pos--;
    if(pos<0){
         pos=images.length-1;
    }
    slider.src=images[pos];
}

function next(){
    let slider=document.getElementById("slider");
    pos++;
    if(pos>=images.length){
        pos=0;
    }
    slider.src=images[pos];
}
