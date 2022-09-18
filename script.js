// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword() {

  var userInput = window.prompt("How long would you like your password to be?")

  var passwordLength = parseInt(userInput)

  if (isNaN(passwordLength)) {
    window.alert("This is not a number!")
    return
  }

  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Password length must be between 8 and 128 characters")
    return
  }

  var userWantsNumbers = window.confirm("Would you like to include numbers in your password?")
  var userWantsSymbols = window.confirm("Would you like to include symbols in your password?")
  var userWantsLowercase = window.confirm("Would you like to include lowercase letters in your password?")
  var userWantsUppercase = window.confirm("Would you like to include Uppercase letters in your password?")

  var numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  var symbolList = ["!", "@", "#", "$", "%", "^", "&", "*"]
  var lowercaseList = ["a", "b", "c", "d", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "t", "u", "v", "w", "x", "y", "z"]
  var UppercaseList = []

  var optionsCart = [numberList]

  for (var i = 0; i < lowercaseList.length; i++) {
    UppercaseList[i] = lowercaseList[i].toUpperCase()
  }

if (userWantsNumbers === true) {
  optionsCart.push(numberList)
}

if (userWantsSymbols === true) {
  optionsCart.push(symbolList)
}

if (userWantsUppercase === true) {
  optionsCart.push(UppercaseList)
}

if (userWantsLowercase === true) {
  optionsCart.push(lowercaseList)
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
