
let num = Math.floor(Math.random() * 6)
document.getElementById("but").onclick = function() {
  console.log(num)

  if (parseInt(document.getElementById("ans").value) === num) {
    document.getElementById("c/w").innerHTML = "correct! click on the button to guess again"
  }
  else {
    document.getElementById("c/w").innerHTML = "wrong, click on the button to guess again, it will be a diffirent number tho!"
  }
}



