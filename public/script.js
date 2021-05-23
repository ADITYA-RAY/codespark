
function openCity(cityName,j) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      if (i != j) {
        tablinks[i].className = tablinks[i].className.replace(" HTMLcard-active", "");
      }else{
        tablinks[i].className = tablinks[i].className +=(" HTMLcard-active");
      }
    }
    document.getElementById(cityName).style.display = "block";
  
  }
  
  // Get the element with id="defaultOpen" and click on it
 window.onload= function(){ document.getElementById("defaultOpen").click();}