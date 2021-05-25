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

var elem = document.documentElement;
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}

function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) { /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE11 */
    document.msExitFullscreen();
  }
}



function autoTab(cityName, j) {

  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("autotabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  document.getElementById(cityName).style.display = "block";


}

window.onload = function () {
  document.getElementById("autodefaultOpen").click();
  document.getElementById("defaultOpen").click();
 
  
}
