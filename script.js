// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

//Here we will store the values of the user preferences
var bigArray = []; //This is going to store the user preferences for the password
var randomArray = []; //This is going to store the randomly assinged elements of the password
let pass; //This is going to store the password
let lowercaseCheckbox = document.querySelector("input[name=lowercase]");
let uppercaseCheckbox = document.querySelector("input[name=uppercase]");
let numbersCheckbox = document.querySelector("input[name=numbers]");
let specialsCheckbox = document.querySelector("input[name=specials]");

//Here we will register click event listeners / Add values to the array when user clicks
//TO ADD: Validation of buttons

  lowercaseCheckbox.addEventListener('click', function(){
    if(this.checked) {
      bigArray = bigArray.concat(lowerCasedCharacters)
    }
    console.log(bigArray)
  })
  uppercaseCheckbox.addEventListener('change', function(){
    if(this.checked) {
      bigArray = bigArray.concat(upperCasedCharacters)
    }
  })
  numbersCheckbox.addEventListener('change', function(){
    if(this.checked) {
      bigArray = bigArray.concat(numericCharacters)
    }
  })
  specialsCheckbox.addEventListener('change', function(){
    if(this.checked) {
      bigArray = bigArray.concat(specialCharacters)
    }
  })

console.log(rangeValue.innerText)
// Function for getting a random element from an array
function getRandom() {
  for(i=0;i<bigArray.length;i++){
    randomArray.push(bigArray[Math.floor(Math.random() * bigArray.length)]);//this will give us a random number that we will use to index
  }
  return randomArray
}

// Function to generate password with user input
// Here we will asign the first X elements of the randomly created array. X stands for rangeValue.innerText
function generatePassword() {
  pass = randomArray.slice(0, rangeValue.innerText)//As the assigned password, we will use the users chosen's length to slice the array.
  let join = pass.join("");//This will transform the array into a string and remove it's commas
  return join;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}



// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);