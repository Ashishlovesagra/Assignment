function changeBackground() {
  var currentTime = new Date().getHours();
  var a = document.getElementById("image");
  var b = document.getElementById("box444");

  if (currentTime >= 6 && currentTime < 12) {
    a.style.backgroundImage = "url(./images/morning.svg)";
    b.innerText = "GRAB SOME HEALTHY BREAKFAST!!!";
    document.getElementById("Ashish").innerText="GOOD MORNING!! WAKE UP !!";

  } else if (currentTime >= 12 && currentTime < 16) {
    a.style.backgroundImage = "url(./images/afternoon.svg)";
    b.innerText = "LET'S HAVE SOME LUNCH !!";
    document.getElementById("Ashish").innerText="GOOD AFTERNOON !! TAKE SOME SLEEP";

  } else if (currentTime >= 16 && currentTime < 20) {
    a.style.backgroundImage = "url(./images/lunch_image.png)";
    b.innerText = "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
    document.getElementById("Ashish").innerText="GOOD EVENING !!";

  } else {
    a.style.backgroundImage = "url(./images/night.png)";
    b.innerText = "CLOSE YOUR EYES AND GO TO SLEEP";
    document.getElementById("Ashish").innerText="GOOD NIGHT !!";
    
  }
}
changeBackground();
setInterval(changeBackground,1000);

function changeButtonText() {
    var button = document.getElementById("btntxt");
    button.innerHTML = "Its Party Time!!";
  }

