function validateString() {
  const inputString = document.getElementById("input-string").value;
  const isValid = check(inputString);

  if (isValid) {
    document.getElementById("result").textContent = "The string is Valid";
    document.getElementById("result").className = "valid";
  } else {
    document.getElementById("result").textContent = "The string is not Valid";
    document.getElementById("result").className = "invalid";
  }
}

function check(input) {
  const stack = [];
  const openers = ["(", "{", "["];
  const closers = [")", "}", "]"];

  for (let i = 0; i < input.length; i++) {
    let char = input[i];

    if (openers.includes(char)) {
      stack.push(char);
    } else if (closers.includes(char)) {
      let opener = stack.pop();
      if (!opener || openers.indexOf(opener) !== closers.indexOf(char)) {
        return false;
      }
    }
  }

  return stack.length === 0;
}
