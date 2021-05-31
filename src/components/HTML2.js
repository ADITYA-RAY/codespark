import React from 'react'


export const HTML2 = () => {

  const Autotabopen = (cityName, j) => {


    
    window.autoTab(cityName, j);
    var w = document.getElementById("HTML1-side-section").style.width;
    if (w === '0%' || w === '') {
     
    } else {
      document.getElementById("HTML1-side-section").style.width = "0%";
      document.getElementById("HTML1-side-section-btn").innerHTML = "<i class='fa fa-list' style={{ fontSize: '30px', color: 'pink', paddingRight: '10px' }}></i>";
    }
  };
  const searchIndexOut = () => {
  window.searchIndex();
  };
  return (
    <div>
        <div className="HTML1-side-section" id="HTML1-side-section">
      <input type="text" id="mySearch" className="inputstyle" onKeyUp={() => {searchIndexOut()}} placeholder="Search.." title="Type in a category" autoComplete="off"/>
          <ul id="myMenu" style={{listStyleType:'none',padding:'0'}}>
       <li><a className="autotablinks" href="# " onClick={() => { Autotabopen("autotab1", '0') }} id="autodefaultOpen"><i class="fa fa-book"></i> Introduction to HTML </a></li>
       <li><a className="autotablinks" href="# " onClick={() => { Autotabopen("autotab2", '1') }}><i class="fa fa-book"></i> Elements & attributes</a></li>
       <li><a className="autotablinks" href="# " onClick={() => { Autotabopen("autotab3", '2') }}><i class="fa fa-book"></i> Heading, Paragraph & Style </a></li>
       <li><a className="autotablinks" href="# " onClick={() => { Autotabopen("autotab4", '3') }}><i class="fa fa-book"></i> Formatting & Quatations</a></li>
       <li><a className="autotablinks" href="# " onClick={() => { Autotabopen("autotab5", '4') }}><i class="fa fa-book"></i> Comments, Colors & CSS </a></li>
       <li><a className="autotablinks" href="# " onClick={() => { Autotabopen("autotab6", '5') }}><i class="fa fa-book"></i> Links, Images & Tables </a></li>
       <li><a className="autotablinks" href="# " onClick={() => { Autotabopen("autotab7", '6') }}><i class="fa fa-book"></i> List, Block & Inline </a></li>
       <li><a className="autotablinks" href="# " onClick={() => { Autotabopen("autotab8", '7') }}> <i class="fa fa-book"></i> Classes & ID </a></li>
       <li><a className="autotablinks" href="# " onClick={() => { Autotabopen("autotab9", '8') }}><i class="fa fa-book"></i> Iframes & Javascript </a></li>
       <li><a className="autotablinks" href="# " onClick={() => { Autotabopen("autotab10", '9') }}><i class="fa fa-book"></i> File Paths & Head </a></li>
       <li><a className="autotablinks" href="# " onClick={() => { Autotabopen("autotab11", '10') }}><i class="fa fa-book"></i> Layout & Responsive </a></li>
       <li><a className="autotablinks" href="# " onClick={() => { Autotabopen("autotab12", '11') }}><i class="fa fa-book"></i> Computer code & Semantics </a></li>
       </ul>
      </div>






    </div>
  )
}
