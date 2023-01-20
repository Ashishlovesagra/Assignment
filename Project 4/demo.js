function clock() {
  var hours = document.getElementById("hr");
  var minutes = document.getElementById("min");
  var seconds = document.getElementById("sec");
  var am = document.getElementById("am");

  var time = new Date();
  var hrs = time.getHours();
  var mins = time.getMinutes();
  var secs = time.getSeconds();
  var am_pm = "AM";

  if (hrs == 0) {
    hrs = 12;
  }
  if (hrs > 12) {
    hrs = hrs - 12;
    am_pm = "PM";
  }
  if (hrs < 10) {
    hrs = "0" + hrs;
  }
  if (mins < 10) {
    mins = "0" + mins;
  }
  if (secs < 10) {
    secs = "0" + secs;
  }
  hours.innerText = hrs;
  minutes.innerText = mins;
  seconds.innerText = secs;
  am.innerText = am_pm;
}
clock();
setInterval(clock, 1000);
//-----------------------------------------------------------------------------------------------------------------
function changeCurentTimeMessage() {
  var currentTime = new Date().getHours();

  if (currentTime >= 6 && currentTime < 12) {
    document.getElementById("Ashish").innerText = "GOOD MORNING!! WAKE UP !!";
  } else if (currentTime >= 12 && currentTime < 16) {
    document.getElementById("Ashish").innerText =
      "GOOD AFTERNOON !! TAKE SOME SLEEP";
  } else if (currentTime >= 16 && currentTime < 20) {
    document.getElementById("Ashish").innerText = "GOOD EVENING !!";
  } else {
    document.getElementById("Ashish").innerText = "GOOD NIGHT !!";
  }
}
changeCurentTimeMessage();
setInterval(changeCurentTimeMessage, 1000);
//----------------------------------------------Button---------------------------------------------------
var button = document.getElementById("btntxt");
var originalText = button.innerHTML;

button.addEventListener("click", function() {
    button.innerHTML = "Its Party Time!!";
    setTimeout(function() {
        button.innerHTML = originalText;
    }, 5000);
});
//-------------------------------------------------------------------------------------------------------------
function set() {
  var x = document.getElementById("select1").value;
  var y = document.getElementById("select2").value;
  var z = document.getElementById("select3").value;
  var a = document.getElementById("select4").value;
  var hour = new Date().getHours();

  if (x == hour) {
    document.getElementById("image").style.backgroundImage =
      "url(./images/morning.svg)";
    document.getElementById("box444").innerText =
      "GRAB SOME HEALTHY BREAKFAST!!!";
  }
  if (y == hour) {
    document.getElementById("image").style.backgroundImage =
      "url(./images/afternoon.svg)";
    document.getElementById("box444").innerText = "LET'S HAVE SOME LUNCH !!";
  }
  if (z == hour) {
    document.getElementById("image").style.backgroundImage =
      "url(./images/lunch_image.png)";
    document.getElementById("box444").innerText =
      "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
  }
  if (a == hour) {
    document.getElementById("image").style.backgroundImage =
      "url(./images/night.png)";
    document.getElementById("box444").innerText =
      "CLOSE YOUR EYES AND GO TO SLEEP";
  }
  getOption();
}

function getOption() {
  var e = document.getElementById("select1");
  var text1 = e.options[e.selectedIndex].text;

  var f = document.getElementById("select2");
  var text2 = f.options[f.selectedIndex].text;

  var g = document.getElementById("select3");
  var text3 = g.options[g.selectedIndex].text;

  var h = document.getElementById("select4");
  var text4 = h.options[h.selectedIndex].text;

  var idExist = document.getElementById("detailBox");
  if (idExist) {
    idExist.innerHTML = `Wake Up Time : ${text1} <br> Lunch Time : ${text2}<br> Nap Time : ${text3}<br> Sleep Time :${text4}`;
  }
}
