import React from 'react'


export const HTML2 = () => {
  const accordionHeadBtn = {
    textDecoration: 'none',
    color: 'purple'
  }
  const Autotabopen = (cityName, j) => {
    document.getElementById("tab1").style.display = "block";
    document.getElementById("tab5").style.display = "block";
    document.getElementById("tab9").style.display = "block";
    document.getElementById("tab13").style.display = "block";
    document.getElementById("tab17").style.display = "block";
    window.autoTab(cityName, j);
  };
  return (
    <div>
      <div className="HTML1-side-section" id="HTML1-side-section">
        <div className="accordion" id="accordionExample">
          {/* Module 1 accordion section starts*/}
          <div className="card">
            <div className="card-header" id="headingOne">
              <button className="btn btn-link btn-block text-left" style={accordionHeadBtn} type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" >
                <a className="autotablinks" href="#learnmodule" onClick={() => { Autotabopen("autotab1", '0') }} id="autodefaultOpen"><i class="fa fa-book"></i> Introduction to HTML </a>
              </button>
            </div>
            <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
              <div className="card-body">
                <ul className="nobullets" style={{ color: '#424242' }}>
                  <li><i class="fa fa-angle-right"></i> What is HTML?</li>
                  <li><i class="fa fa-angle-right"></i> History of HTML</li>
                  <li><i class="fa fa-angle-right"></i> Developement setup</li>
                  <li><i class="fa fa-angle-right"></i> An basic HTML page</li>
                </ul>
              </div>
            </div>
          </div>
          {/* Module 1 accordion section ends*/}
          {/* Module 2 accordion section starts*/}
          <div className="card">
            <div className="card-header" id="headingTwo">
              <button className="btn btn-link btn-block text-left collapsed" style={accordionHeadBtn} type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <a className="autotablinks" href="#learnmodule" onClick={() => { Autotabopen("autotab2", '1') }}><i class="fa fa-book"></i> Elements & attributes</a>
              </button>
            </div>
            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
              <div className="card-body">
                <ul className="nobullets" style={{ color: '#424242' }}>
                  <li><i class="fa fa-angle-right"></i> What is HTML?</li>
                  <li><i class="fa fa-angle-right"></i> History of HTML</li>
                  <li><i class="fa fa-angle-right"></i> Developement setup</li>
                  <li><i class="fa fa-angle-right"></i> An basic HTML page</li>
                </ul>
              </div>
            </div>
          </div>
          {/* Module 2 accordion section ends*/}
          {/* Module 3 accordion section starts*/}
          <div className="card">
            <div className="card-header" id="headingThree">
              <button className="btn btn-link btn-block text-left collapsed" style={accordionHeadBtn} type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <a className="autotablinks" href="#learnmodule" onClick={() => { Autotabopen("autotab3", '2') }}><i class="fa fa-book"></i> Heading, Paragraph & Style </a>
              </button>
            </div>
            <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
              <div className="card-body">
                <ul className="nobullets" style={{ color: '#424242' }}>
                  <li><i class="fa fa-angle-right"></i> What is HTML?</li>
                  <li><i class="fa fa-angle-right"></i> History of HTML</li>
                  <li><i class="fa fa-angle-right"></i> Developement setup</li>
                  <li><i class="fa fa-angle-right"></i> An basic HTML page</li>
                </ul>
              </div>
            </div>
          </div>
          {/* Module 3 accordion section ends*/}
          {/* Module 4 accordion section starts*/}
          <div className="card">
            <div className="card-header" id="headingFour">
              <button className="btn btn-link btn-block text-left collapsed" style={accordionHeadBtn} type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                <a className="autotablinks" href="#learnmodule" onClick={() => { Autotabopen("autotab4", '3') }}><i class="fa fa-book"></i> Formatting & Quatations</a>
              </button>
            </div>
            <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
              <ul className="nobullets" style={{ color: '#424242' }}>
                <li><i class="fa fa-angle-right"></i> What is HTML?</li>
                <li><i class="fa fa-angle-right"></i> History of HTML</li>
                <li><i class="fa fa-angle-right"></i> Developement setup</li>
                <li><i class="fa fa-angle-right"></i> An basic HTML page</li>
              </ul>
            </div>
          </div>
          {/* Module 4 accordion section ends*/}
          {/* Module 5 accordion section starts*/}
          <div className="card">
            <div className="card-header" id="headingFive">
              <button className="btn btn-link btn-block text-left collapsed" style={accordionHeadBtn} type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                <a className="autotablinks" href="#learnmodule" onClick={() => { Autotabopen("autotab5", '4') }}><i class="fa fa-book"></i> Comments, Colors & CSS </a>
              </button>
            </div>
            <div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#accordionExample">
              <ul className="nobullets" style={{ color: '#424242' }}>
                <li><i class="fa fa-angle-right"></i> What is HTML?</li>
                <li><i class="fa fa-angle-right"></i> History of HTML</li>
                <li><i class="fa fa-angle-right"></i> Developement setup</li>
                <li><i class="fa fa-angle-right"></i> An basic HTML page</li>
              </ul>
            </div>
          </div>
          {/* Module 5 accordion section ends*/}
          {/* Module 6 accordion section starts*/}
          <div className="card">
            <div className="card-header" id="headingSix">
              <button className="btn btn-link btn-block text-left collapsed" style={accordionHeadBtn} type="button" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                <a className="autotablinks" href="#learnmodule" onClick={() => { Autotabopen("autotab6", '5') }}><i class="fa fa-book"></i> Links, Images & Tables </a>
              </button>
            </div>
            <div id="collapseSix" className="collapse" aria-labelledby="headingSix" data-parent="#accordionExample">
              <ul className="nobullets" style={{ color: '#424242' }}>
                <li><i class="fa fa-angle-right"></i> What is HTML?</li>
                <li><i class="fa fa-angle-right"></i> History of HTML</li>
                <li><i class="fa fa-angle-right"></i> Developement setup</li>
                <li><i class="fa fa-angle-right"></i> An basic HTML page</li>
              </ul>
            </div>
          </div>
          {/* Module 6 accordion section ends*/}
          {/* Module 7 accordion section starts*/}
          <div className="card">
            <div className="card-header" id="headingSeven">
              <button className="btn btn-link btn-block text-left collapsed" style={accordionHeadBtn} type="button" data-toggle="collapse" data-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSix">
              <a className="autotablinks" href="#learnmodule" onClick={() => { Autotabopen("autotab7", '6') }}><i class="fa fa-book"></i> List, Block & Inline </a>
              </button>
            </div>
            <div id="collapseSeven" className="collapse" aria-labelledby="headingSeven" data-parent="#accordionExample">
              <ul className="nobullets" style={{ color: '#424242' }}>
                <li><i class="fa fa-angle-right"></i> What is HTML?</li>
                <li><i class="fa fa-angle-right"></i> History of HTML</li>
                <li><i class="fa fa-angle-right"></i> Developement setup</li>
                <li><i class="fa fa-angle-right"></i> An basic HTML page</li>
              </ul>
            </div>
          </div>
          {/* Module 7 accordion section ends*/}
          {/* Module 8 accordion section starts*/}
          <div className="card">
            <div className="card-header" id="headingEight">
              <button className="btn btn-link btn-block text-left collapsed" style={accordionHeadBtn} type="button" data-toggle="collapse" data-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
              <a className="autotablinks" href="#learnmodule" onClick={() => { Autotabopen("autotab8", '7') }}> <i class="fa fa-book"></i> Classes & ID </a>
              </button>
            </div>
            <div id="collapseEight" className="collapse" aria-labelledby="headingEight" data-parent="#accordionExample">
              <ul className="nobullets" style={{ color: '#424242' }}>
                <li><i class="fa fa-angle-right"></i> What is HTML?</li>
                <li><i class="fa fa-angle-right"></i> History of HTML</li>
                <li><i class="fa fa-angle-right"></i> Developement setup</li>
                <li><i class="fa fa-angle-right"></i> An basic HTML page</li>
              </ul>
            </div>
          </div>
          {/* Module 8 accordion section ends*/}
          {/* Module 9 accordion section starts*/}
          <div className="card">
            <div className="card-header" id="headingNine">
              <button className="btn btn-link btn-block text-left collapsed" style={accordionHeadBtn} type="button" data-toggle="collapse" data-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
              <a className="autotablinks" href="#learnmodule" onClick={() => { Autotabopen("autotab9", '8') }}><i class="fa fa-book"></i> Iframes & Javascript </a>
              </button>
            </div>
            <div id="collapseNine" className="collapse" aria-labelledby="headingNine" data-parent="#accordionExample">
              <ul className="nobullets" style={{ color: '#424242' }}>
                <li><i class="fa fa-angle-right"></i> What is HTML?</li>
                <li><i class="fa fa-angle-right"></i> History of HTML</li>
                <li><i class="fa fa-angle-right"></i> Developement setup</li>
                <li><i class="fa fa-angle-right"></i> An basic HTML page</li>
              </ul>
            </div>
          </div>
          {/* Module 9 accordion section ends*/}
           {/* Module 10 accordion section starts*/}
           <div className="card">
            <div className="card-header" id="headingTen">
              <button className="btn btn-link btn-block text-left collapsed" style={accordionHeadBtn} type="button" data-toggle="collapse" data-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
              <a className="autotablinks" href="#learnmodule" onClick={() => { Autotabopen("autotab10", '9') }}><i class="fa fa-book"></i> File Paths & Head </a>
              </button>
            </div>
            <div id="collapseTen" className="collapse" aria-labelledby="headingTen" data-parent="#accordionExample">
              <ul className="nobullets" style={{ color: '#424242' }}>
                <li><i class="fa fa-angle-right"></i> What is HTML?</li>
                <li><i class="fa fa-angle-right"></i> History of HTML</li>
                <li><i class="fa fa-angle-right"></i> Developement setup</li>
                <li><i class="fa fa-angle-right"></i> An basic HTML page</li>
              </ul>
            </div>
          </div>
        </div>
      </div>






    </div>
  )
}
