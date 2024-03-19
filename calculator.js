let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");
let string = "";
let arr = buttons;

arr.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      string = eval(string);
      console.log("string=", string);

      input.innerHTML = string.toString();
    } else if (e.target.innerHTML == "AC") {
      string = "";
      input.innerHTML = string.toString();
    } else if (e.target.innerHTML == "DEL") {
      if (typeof string === "number") {
        string = String(string);
      }
      console.log("string", string);
      string = string.toString().substring(0, string.length - 1);
      input.innerHTML = string.toString();
    } else {
      string += e.target.innerHTML;
      input.innerHTML = string.toString();
    }
  });
});
