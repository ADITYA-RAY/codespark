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
  document.getElementsByClassName("mainmodule")[0].style.display="block";
  var element = document.getElementById("allbody");
  element.classList.add("onmoduleopen");
}

function closeFullscreen() {
  document.getElementsByClassName("mainmodule")[0].style.display="none";
  if(elem.requestFullscreen=='true'){
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) { /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE11 */
    document.msExitFullscreen();
  }
}
  var element = document.getElementById("allbody");
  element.classList.remove("onmoduleopen");
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



function searchIndex() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("mySearch");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myMenu");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}