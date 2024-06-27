



let num = Math.floor(Math.random() * 6);
  console.log(num);

  document.getElementById("but").onclick = function() {
    if (parseInt(document.getElementById("ans").value) === num) {
      document.getElementById("c/w").innerHTML = "correct! click on the button to guess again";
    } else {
      document.getElementById("c/w").innerHTML = "wrong, click on the button to guess again, it will be a different number tho!";
    }
    num = Math.floor(Math.random() * 6); // Generate a new number after each guess
    console.log(num); // Log the new number immediately
  }
