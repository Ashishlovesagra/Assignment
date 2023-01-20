function clock(){
  var hours = document.getElementById("hr");
  var minutes = document.getElementById("min");
  var seconds = document.getElementById("sec");
  var am = document.getElementById("am");

  var time = new Date();
  var hrs  = time.getHours();
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
  hours.innerText   = hrs;
  minutes.innerText = mins;
  seconds.innerText = secs;
  am.innerText = am_pm;
}
clock();
setInterval(clock, 1000);


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
    if(idExist){
    idExist.innerHTML = `Wake Up Time : ${text1} <br> Lunch Time : ${text2}<br> Nap Time : ${text3}<br> Sleep Time :${text4}`;
    }     
} 
