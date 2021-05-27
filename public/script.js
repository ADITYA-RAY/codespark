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

///toggle day night mode

function toggleNightMode(){


  var tabcontent=document.getElementsByClassName("tabcontent");
  for(var i=0;i<tabcontent.length;i++){
    document.getElementsByClassName("tabcontent")[i].style.backgroundColor="#0a182e";
  }
  var HTMLCardListIndex=document.getElementsByClassName("HTMLCardListIndex");
  for(var i=0;i<HTMLCardListIndex.length;i++){
    document.getElementsByClassName("HTMLCardListIndex")[i].style.color="#ffc5ed";
  }
  var HTMLCardModuleno=document.getElementsByClassName("HTMLCardModuleno");
  for(var i=0;i<HTMLCardModuleno.length;i++){
    document.getElementsByClassName("HTMLCardModuleno")[i].style.color="#ffc5ed";
  }
  var autotablinks=document.getElementsByClassName("autotablinks");
  for(var i=0;i<autotablinks.length;i++){
    document.getElementsByClassName("autotablinks")[i].style.color="#cbd5f5";
  }
  var HTMLCardIndex=document.getElementsByClassName("HTMLCardIndex");
  for(var i=0;i<HTMLCardIndex.length;i++){
    document.getElementsByClassName("HTMLCardIndex")[i].style.backgroundColor="#0a192f";
    document.getElementsByClassName("HTMLCardIndex")[i].style.color="#cbd5f5";
  }

  var tabcontent=document.getElementsByClassName("tabcontent");
  for(var i=0;i<tabcontent.length;i++){
    document.getElementsByClassName("tabcontent")[i].style.color="#cbd5f5";
  }
  var HTMLCardModuleno =document.getElementsByClassName("HTMLCardModuleno");
  for(var i=0;i<HTMLCardModuleno .length;i++){
    document.getElementsByClassName("HTMLCardModuleno")[i].style.backgroundColor="#6f00ca";
  }
  var tlinks =document.getElementsByClassName("tbl");
  for(var i=0;i<tlinks.length;i++){
    document.getElementsByClassName("tbl").className -= " tablinks";
    document.getElementsByClassName("tbl")[i].style.color="#fff !important";
  }
  document.getElementsByClassName("HTML1-main-content")[0].style.backgroundColor="#0a182e";
  document.getElementsByClassName("HTML1-side-section")[0].style.backgroundColor="#0a182e";

  document.getElementsByClassName("HTMLnav")[0].style.backgroundColor="#0a182e";
  document.getElementsByClassName("inputstyle")[0].style.backgroundColor="#0a182e";
  document.getElementsByClassName("inputstyle")[0].style.border="1px solid rgb(4 19 130)";
  document.getElementsByClassName("inputstyle")[0].style.color="#cbd5f5";

}

function toggleLightMode(){


  var tabcontent=document.getElementsByClassName("tabcontent");
  for(var i=0;i<tabcontent.length;i++){
    document.getElementsByClassName("tabcontent")[i].style.backgroundColor="white";
  }
  var HTMLCardListIndex=document.getElementsByClassName("HTMLCardListIndex");
  for(var i=0;i<HTMLCardListIndex.length;i++){
    document.getElementsByClassName("HTMLCardListIndex")[i].style.color="rgb(44, 44, 43)";
  }
  var HTMLCardModuleno=document.getElementsByClassName("HTMLCardModuleno");
  for(var i=0;i<HTMLCardModuleno.length;i++){
    document.getElementsByClassName("HTMLCardModuleno")[i].style.color="white";
  }
  var autotablinks=document.getElementsByClassName("autotablinks");
  for(var i=0;i<autotablinks.length;i++){
    document.getElementsByClassName("autotablinks")[i].style.color="rgb(111, 0, 202)";
  }
  var HTMLCardIndex=document.getElementsByClassName("HTMLCardIndex");
  for(var i=0;i<HTMLCardIndex.length;i++){
    document.getElementsByClassName("HTMLCardIndex")[i].style.backgroundColor="white";
    document.getElementsByClassName("HTMLCardIndex")[i].style.color="black";
  }

  var tabcontent=document.getElementsByClassName("tabcontent");
  for(var i=0;i<tabcontent.length;i++){
    document.getElementsByClassName("tabcontent")[i].style.color="rgb(70, 70, 70)";
  }
  var HTMLCardModuleno =document.getElementsByClassName("HTMLCardModuleno");
  for(var i=0;i<HTMLCardModuleno .length;i++){
    document.getElementsByClassName("HTMLCardModuleno")[i].style.backgroundColor="rgb(0, 202, 142)";
  }
  tablinks = document.getElementsByClassName("tablinks");
  var tlinks =document.getElementsByClassName("tbl");
  for(var i=0;i<tlinks.length;i++){
    document.getElementsByClassName("tbl")[i].style.color="#161616b9";
  }
  document.getElementsByClassName("HTML1-main-content")[0].style.backgroundColor="white";
  document.getElementsByClassName("HTML1-side-section")[0].style.backgroundColor="white";

  document.getElementsByClassName("HTMLnav")[0].style.backgroundColor="rgb(131, 11, 125)";
  document.getElementsByClassName("inputstyle")[0].style.backgroundColor="white";
  document.getElementsByClassName("inputstyle")[0].style.border="1px solid rgb(4 19 130)";
  document.getElementsByClassName("inputstyle")[0].style.color="black";

}