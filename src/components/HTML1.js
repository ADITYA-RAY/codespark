import React from 'react'


export const HTML1 = () => {

function showIndex(){ 
  var w=document.getElementById("HTML1-side-section").style.width;
  if(w==='0%'||w===''){
document.getElementById("HTML1-side-section").style.width="100%";
document.getElementById("HTML1-side-section-btn").innerHTML="<i class='fa fa-close' style={{ fontSize: '30px', color: 'pink', paddingRight: '10px' }}></i>";
  }else{
    document.getElementById("HTML1-side-section").style.width="0%";
    document.getElementById("HTML1-side-section-btn").innerHTML="<i class='fa fa-list' style={{ fontSize: '30px', color: 'pink', paddingRight: '10px' }}></i>";
  }

}
  return (
    <div>
      <nav id="navbar" className="navbar fixed-top navbar-expand-lg navbar-dark HTMLnav" >
      <a className="navbar-brand ml23 logoHTMLpage" href="#home"><l1>code</l1><l2>Spark</l2></a>
        <div className="nav-right-edit">
        <li className="navbar-brand ml23">
          <a className="nav-link  px-1 mr-1" href="#snippets"><i className="fa fa-pie-chart" style={{ fontSize: '30px', color: 'pink', paddingRight: '10px' }}></i></a>
        </li>
        <li className="navbar-brand ml23">
          <a className="nav-link  px-1 mr-1" href="#articles"><i className="fa fa-bell" style={{ fontSize: '30px', color: 'pink', paddingRight: '10px' }}></i></a>
        </li>
        <li className="navbar-brand ml23">
          <a className="nav-link  px-1 mr-1" href="#articles"><i className="fa fa-user" style={{ fontSize: '30px', color: 'pink', paddingRight: '10px' }}></i></a>
        </li>
        <li className="navbar-brand ml23">
          <a className="nav-link  px-1 mr-1" href="#articles" id="HTML1-side-section-btn" onClick={showIndex}><i className="fa fa-list" style={{ fontSize: '30px', color: 'pink', paddingRight: '10px' }}></i></a>
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
