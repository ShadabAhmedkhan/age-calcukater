// console.log("shadab");
// var x : number = parseInt(prompt("Enter 1212 number"));
// var y : number =  parseInt(prompt("enetr second number"));

// var result : number = x+y;
// alert(result);
// document.write("result" +"\n"+ result);

// var a : number = parseInt(prompt("Enter 1212 number"));
// var b : number =  parseInt(prompt("enetr second number"));

// var result : number = a-b;
// alert(result);
// document.write("result" + result);

// var c : number = parseInt(prompt("Enter 1212 number"));
// var d : number =  parseInt(prompt("enetr second number"));

// var result : number = c*d;
// alert(result);
// document.write("result" + result);
// var e : number = parseInt(prompt("Enter 1212 number"));
// var f : number =  parseInt(prompt("enetr second number"));

// var result : number = e+f;
// alert(result);
// document.write("result" + result);

function Age()
{
var bday=parseInt(document.forms[0].txtBday.value);
var bmo=(parseInt(document.forms[0].txtBmo.value)-1);
var byr=parseInt(document.forms[0].txtByr.value);
var byr;
var age;
var now = new Date();
tday=now.getDate();
tmo=(now.getMonth());
tyr=(now.getFullYear());
{
if((tmo > bmo)||(tmo==bmo & tday>=bday))
{age=byr}
else
{age=byr+1}
alert("As of today, "+now+' \n'+", you are:"+(tyr-age)+ " years old");
}}