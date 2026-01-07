// Decimal (normal number) to Binary Converter
let output = document.querySelector("#output");
let btn = document.querySelector("#btn");

btn.onclick = function () {
  let number = Number(document.querySelector("#num").value);
  let binary = "";
  if (number === 0) {
    binary = "0";
  } else {
    while (number > 0) {
      binary = (number % 2) + binary;
      number = Math.floor(number / 2);
    }
  }

  
  output.innerText = binary;
};
