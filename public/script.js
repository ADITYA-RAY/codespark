window.onload = function () {
  document.getElementById("autodefaultOpen").click();
  document.getElementById("defaultOpen").click();
}

function openCity(cityName, j) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    if (i != j) {
      tablinks[i].className = tablinks[i].className.replace(" HTMLcard-active", "");
    } else {
      tablinks[i].className = tablinks[i].className += (" HTMLcard-active");
    }
  }
  document.getElementById(cityName).style.display = "block";

}




function autoTab(cityName, j) {

  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("autotabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  document.getElementById(cityName).style.display = "block";


}
for(var i=5;i<=100;i+=4){
  document.getElementById("tab"+i).style.display="block";
}
window.onload = function () {
  document.getElementById("autodefaultOpen").click();
  document.getElementById("defaultOpen").click();
 
  
}
