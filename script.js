// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword() {

  var userInput = window.prompt("How long would you like your password to be?")

  var passwordLength = parseInt(userInput)

  if (is NaN(passwordLength)) {
    window.alert("This is not a number!")
    return
  } 

  if (passwordLength < 8 || passwordLength > 128) {
  window.alert("Password length must be between 8 and 128 characters")
return
}

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
