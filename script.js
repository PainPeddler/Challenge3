// Assignment code here



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var alphabetL = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var alphabetU = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var numbers = [0,1,2,3,4,5,6,7,8,9];
  var special = ["~","!","@","#","$","%","^","&","*","(",")","-","_","+","=","{","}","[","]",":",";","<",">","?"]
  var passLength;
  var userChoice =[];
  passChars = [];
  var generatedPass = [];

passLength = prompt("How many characters long would you like your password to be? (Must be between 8-128")
console.log(passLength + " Characters" );
passLength = parseFloat(passLength);

//check if number enteres is valid
if (passLength < 8 || passLength > 128 || !(Number.isInteger(passLength))){
  alert("Insufficient value");
  return;
} 
//get specifications for password
else {
  userChoice[0] = confirm("Should the password contain lowercase letters?");
  userChoice[1] = confirm("Should the password contain uppercase letters?");
  userChoice[2] = confirm("Should the password contain numeric digits?");
  userChoice[3] = confirm("Should the password contain special characters?");
}

// if user says no to all confirms
if (!userChoice[0] && !userChoice[1] && !userChoice[2] && !userChoice [3]) {
  alert("Password could not be generated. Please confirm at least one type of character next time");
  return;
}


//choices being put into array
if (userChoice[0]) {
  passChars = passChars.concat(alphabetL);
}
if (userChoice[1]) {
    passChars = passChars.concat(alphabetU);
  }
if (userChoice[2]) {
  passChars = passChars.concat(numbers);
}
if (userChoice[3]) {
  passChars = passChars.concat(special);
}
console.log(passChars);

//password generation
for (var i = 0; i < passLength; i++) {
  var random = passChars[Math.floor(Math.random() * passChars.length)];
  generatedPass.push(random);
}
//join array into one string
var password = generatedPass.join("");
return password;

}




