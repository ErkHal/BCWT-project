/*
  Author Erkki Halinen
*/
'use strict'

/* This method checks if the same password is entered twice */
const verifyPasswd = (evt) => {
  evt.preventDefault();

  const firstPasswd = document.querySelector('input[type=password]');
  console.log(firstPasswd.value);
  const secondPasswd = document.querySelector('input[type=password]:nth-child(3)');
  console.log(secondPasswd.value);

// Adds a warning color and text if the password don't match
  if(firstPasswd.value === secondPasswd.value) {
    console.log('match !');
    firstPasswd.classList.remove("warningRed");
    secondPasswd.classList.remove("warningRed");
  } else {
    firstPasswd.classList.add("warningRed");
    secondPasswd.classList.add("warningRed");
    alert("Passwords do not match ! Please checks the passwords.");
  }
}

document.querySelector("form").addEventListener("submit", verifyPasswd);
