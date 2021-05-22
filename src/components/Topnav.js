import React from 'react'


export const Topnav = () => {

   window.onscroll = function() {scrollFunction()};
    
    function scrollFunction() {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navbar").style.backgroundColor = "rgba(131, 11, 125, 1)";
      } else {
        document.getElementById("navbar").style.backgroundColor = "rgba(131, 11, 125, 0)";
      }
    }
    return (
        <div>
<nav id="navbar" className="navbar fixed-top navbar-expand-lg navbar-dark" >
  <a className="navbar-brand ml23" href="#home"><l1>code</l1><l2>Spark</l2></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
    <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle px-2" href="#mainco" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Tutorials
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="/learnhtml">HTML</a>
          <a className="dropdown-item" href="/learncss">CSS</a>
          <a className="dropdown-item" href="/learnjavascript">Javascript</a>
        </div>
      </li>
      <li className="nav-item active">
        <a className="nav-link  px-2" href="#snippets">Snippets<span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link  px-2 mr-2" href="#articles">Articles</a>
      </li>
      <li className="nav-item">
      <button type="button" class="btn btn-primary mr-3"><i class="fa fa-user"></i> Log in</button>
      </li>
    
    </ul>
   
  </div>
</nav> 
        </div>
    )
}
