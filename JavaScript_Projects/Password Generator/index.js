const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
   "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let passwordaEl = document.getElementById("passworda-el");
let passwordbEl = document.getElementById("passwordb-el");

function passwordGen() {
  for (let i = 0; i < 15; i++) {
    let randomIndex = Math.floor(Math.random() * characters.length);
    let randomIndex2 = Math.floor(Math.random() * characters.length);
    passwordaEl.textContent += characters[randomIndex];
    passwordbEl.textContent += characters[randomIndex2];
  }
}

function copyToClick(){
   let copyPass = document.getElementById("copy-pwd");
   copyPass.select();
   navigator.clipboard.copyPass(copyPass.value);
   alert(`Copied the text: ${copyPass.value}`);
}










    //ability to set password length
/// click to copy

//1. generate a 15 character length random pasword from the characters[].
//2. display output by clicking the generate password button.
