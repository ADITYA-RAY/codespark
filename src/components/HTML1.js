import React from 'react'


export const HTML1 = () => {

  function showIndex() {
    var w = document.getElementById("HTML1-side-section").style.width;
    if (w === '0%' || w === '') {
      document.getElementById("HTML1-side-section").style.width = "100%";
      document.getElementById("HTML1-side-section-btn").innerHTML = "<i class='fa fa-close' style={{ fontSize: '30px', color: 'pink', paddingRight: '10px' }}></i>";
    } else {
      document.getElementById("HTML1-side-section").style.width = "0%";
      document.getElementById("HTML1-side-section-btn").innerHTML = "<i class='fa fa-list' style={{ fontSize: '30px', color: 'pink', paddingRight: '10px' }}></i>";
    }

  }
  const changeMode = () => {
    var z= document.getElementsByClassName("inputstyle")[0].style.color;

    if(z==="rgb(203, 213, 245)"){
      window.toggleLightMode(); 
      document.getElementById("modetoggle").className = " fa fa-moon-o";
  
    }else{
      window.toggleNightMode();
      document.getElementById("modetoggle").className = " fa fa-sun-o";
    
    }
   
  
  };
  
  return (
    <div id="learnmodule">
      <nav id="navbar" className="navbar fixed-top navbar-expand-lg navbar-dark HTMLnav" >
        <a className="navbar-brand ml23 logoHTMLpage" href="/"><l1>code</l1><l2>Spark</l2></a>
        <div className="nav-right-edit">
        <li className="navbar-brand ml23">
            <a className="nav-link  px-2 " href="#."  onClick={() => { changeMode() }}><i className="fa fa-moon-o" id="modetoggle" style={{ fontSize: '30px', color: 'pink', paddingRight: '10px' }}></i></a>
          </li>
          <li className="navbar-brand ml23">
            <a className="nav-link  px-2" href="# "><i className="fa fa-pie-chart" style={{ fontSize: '30px', color: 'pink', paddingRight: '10px' }}></i></a>
          </li>
          <li className="navbar-brand ml23">
            <a className="nav-link  px-2 " href="# "><i className="fa fa-user" style={{ fontSize: '30px', color: 'pink', paddingRight: '10px' }}></i></a>
          </li>

          <li className="navbar-brand ml23">
            <a className="nav-link  px-2 " href="# " id="HTML1-side-section-btn" onClick={showIndex}><i className="fa fa-list" style={{ fontSize: '30px', color: 'pink', paddingRight: '10px' }}></i></a>
          </li>
        </div>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">

          <ul className="navbar-nav ml-auto">
            {/*<li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle px-2" href="#mainco" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Tutorials
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="/learnhtml">HTML</a>
          <a className="dropdown-item" href="/learncss">CSS</a>
          <a className="dropdown-item" href="/learnjavascript">Javascript</a>
        </div>
    </li>*/}
          </ul>

        </div>
      </nav>
    </div>
  )
}
