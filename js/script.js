const numero = "#24";
let textname = prompt("name");
console.log(textname);
let textsurname = prompt("surname");
console.log(textsurname);
let textcolor = prompt("color");
console.log(textcolor);
const password = textname + textsurname + textcolor + "#24";
document.getElementById("password").innerHTML = `la tua password è: ${password}`;