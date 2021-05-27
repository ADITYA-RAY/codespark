import React from 'react'


export const HTML2 = () => {

  const Autotabopen = (cityName, j) => {
    document.getElementById("tab1").style.display = "block";
    document.getElementById("tab5").style.display = "block";
    document.getElementById("tab9").style.display = "block";
    document.getElementById("tab13").style.display = "block";
    document.getElementById("tab17").style.display = "block";
    window.autoTab(cityName, j);
  };
  const searchIndexOut = () => {
  window.searchIndex();
  };
  return (
    <div>
        <div className="HTML1-side-section" id="HTML1-side-section">
        <input type="text" id="mySearch"  onKeyUp={() => {searchIndexOut()}} placeholder="Search.." title="Type in a category" autoComplete="off"/>
          <ul id="myMenu" style={{listStyleType:'none',padding:'0'}}>
       <li><a className="autotablinks" href="#learnmodule" onClick={() => { Autotabopen("autotab1", '0') }} id="autodefaultOpen"><i class="fa fa-book"></i> Introduction to HTML </a></li>
       <li><a className="autotablinks" href="#learnmodule" onClick={() => { Autotabopen("autotab2", '1') }}><i class="fa fa-book"></i> Elements & attributes</a></li>
       <li><a className="autotablinks" href="#learnmodule" onClick={() => { Autotabopen("autotab3", '2') }}><i class="fa fa-book"></i> Heading, Paragraph & Style </a></li>
       <li><a className="autotablinks" href="#learnmodule" onClick={() => { Autotabopen("autotab4", '3') }}><i class="fa fa-book"></i> Formatting & Quatations</a></li>
       <li><a className="autotablinks" href="#learnmodule" onClick={() => { Autotabopen("autotab5", '4') }}><i class="fa fa-book"></i> Comments, Colors & CSS </a></li>
       <li><a className="autotablinks" href="#learnmodule" onClick={() => { Autotabopen("autotab6", '5') }}><i class="fa fa-book"></i> Links, Images & Tables </a></li>
       <li><a className="autotablinks" href="#learnmodule" onClick={() => { Autotabopen("autotab7", '6') }}><i class="fa fa-book"></i> List, Block & Inline </a></li>
       <li><a className="autotablinks" href="#learnmodule" onClick={() => { Autotabopen("autotab8", '7') }}> <i class="fa fa-book"></i> Classes & ID </a></li>
       <li><a className="autotablinks" href="#learnmodule" onClick={() => { Autotabopen("autotab9", '8') }}><i class="fa fa-book"></i> Iframes & Javascript </a></li>
       <li><a className="autotablinks" href="#learnmodule" onClick={() => { Autotabopen("autotab10", '9') }}><i class="fa fa-book"></i> File Paths & Head </a></li>
       <li><a className="autotablinks" href="#learnmodule" onClick={() => { Autotabopen("autotab10", '9') }}><i class="fa fa-book"></i> File Paths & Head </a></li>
       <li><a className="autotablinks" href="#learnmodule" onClick={() => { Autotabopen("autotab10", '9') }}><i class="fa fa-book"></i> File Paths & Head </a></li>
       </ul>
      </div>






    </div>
  )
}
