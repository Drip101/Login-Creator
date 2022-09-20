// Assignment Code
var generateBtn = document.querySelector("#generate");


function randomInt(min, max) {
  if (!max) {
    max = min
    min = 0
  }
  var rand = Math.random()
  return Math.floor(min * (1 - rand) + rand * max)
}

function getRandomIem(list) {
  return list[randomInt(list.length)]
}

function generatePassword() {



    var userInput = window.prompt("How long would you like your password to be?")

    // when the user exits the prompt, return and start over.
    if (userInput === null) {
      return
    }

    var passwordLength = parseInt(userInput)

    if (isNaN(passwordLength)) {
      window.alert("That's not a number!")
    } else if (passwordLength < 8 || passwordLength > 128) {
      window.alert("Invalid passoword length. Length should be between 8 and 128 characters.")
    } else {
      console.log('continue')
    }
  


  // added the window options for the user prompts for password.
  var userWantsNumbers = window.confirm("Would you like to include numbers in your password?")
  var userWantsSymbols = window.confirm("Would you like to include symbols in your password?")
  var userWantsLowercase = window.confirm("Would you like to include lowercase letters in your password?")
  var userWantsUppercase = window.confirm("Would you like to include Uppercase letters in your password?")

  // added list for numbers, symbols, and letter characters
  var numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  var symbolList = ["!", "@", "#", "$", "%", "^", "&", "*"]
  var lowercaseList = ["a", "b", "c", "d", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "t", "u", "v", "w", "x", "y", "z"]
  var UppercaseList = []
  
  //lowercaseList.join("").toUpperCase().split('')

  var optionsCart = []

  for (var i = 0; i < lowercaseList.length; i++) {
    UppercaseList[i] = lowercaseList[i].toUpperCase()
  }

  if (userWantsNumbers === true) {
     optionsCart = optionsCart.concat(numberList)
  }

  if (userWantsSymbols === true) {
    optionsCart.push(...symbolList)
  }

  if (userWantsUppercase === true) {
    optionsCart.push(...UppercaseList)
  }

  if (userWantsLowercase === true) {
    optionsCart.push(...lowercaseList)
  }

  // if (optionsCart.length === 0) {
  //   optionsCart.push(lowercaseList)
  // }

  var genneratedPassword = ""
console.log(optionsCart[0])
  for (var i = 0; i < passwordLength; i++) {
  
    var randomi = Math.floor(Math.random() * optionsCart.length)
    console.log(randomi)
    genneratedPassword += optionsCart[randomi]
  }
console.log(genneratedPassword)
  return genneratedPassword
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  if (password) {
    passwordText.value = password;
  }


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
