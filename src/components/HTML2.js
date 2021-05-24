import React from 'react'


export const HTML2 = () => {
  const accordionHeadBtn = {
    textDecoration: 'none',
    color: 'purple'
  }
  const Autotabopen = (cityName, j) => {
      document.getElementById("tab5").style.display="block";
      document.getElementById("tab9").style.display="block";
    window.autoTab(cityName, j);
};
  return (
    <div>
      <div className="HTML1-side-section" id="HTML1-side-section">
        <div className="accordion" id="accordionExample">
          <div className="accordcount" id="helium">
            <div className="card">
              <div className="card-header" id="headingOne">
                <h2 className="mb-0">
                  <button className="btn btn-link btn-block text-left" style={accordionHeadBtn} type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" >
                   <a className="autotablinks" href="#learnmodule" onClick={() => { Autotabopen("autotab1", '0') }} id="autodefaultOpen">Introduction to HTML </a>
                  </button>
                </h2>
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
          </div>
          <div className="accordcount">
            <div className="card">
              <div className="card-header" id="headingTwo">
                <h2 className="mb-0">
                  <button className="btn btn-link btn-block text-left collapsed" style={accordionHeadBtn} type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  <a className="autotablinks" href="#learnmodule" onClick={() => { Autotabopen("autotab2", '1') }}>Introduction to HTML </a>
        </button>
                </h2>
              </div>
              <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                <div className="card-body">
                  Some placeholder content for the second accordion panel. This panel is hidden by default.
      </div>
              </div>
            </div>
          </div>
          <div className="accordcount">
            <div className="card">
              <div className="card-header" id="headingThree">
                <h2 className="mb-0">
                  <button className="btn btn-link btn-block text-left collapsed" style={accordionHeadBtn} type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  <a className="autotablinks" href="#learnmodule" onClick={() => { Autotabopen("autotab3", '2') }}>Introduction to HTML </a>
        </button>
                </h2>
              </div>
              <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                <div className="card-body">
                  And lastly, the placeholder content for the third and final accordion panel. This panel is hidden by default.
             </div>
              </div>
            </div>
          </div>
          <div className="accordcount"></div>
          <div className="card">
            <div className="card-header" id="headingFour">
              <h2 className="mb-0">
                <button className="btn btn-link btn-block text-left collapsed" style={accordionHeadBtn} type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                  Collapsible Group Item #3
                </button>
              </h2>
            </div>
            <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
              <div className="card-body">
                And lastly, the placeholder content for the third and final accordion panel. This panel is hidden by default.
              </div>
            </div>
          </div>
        </div>
        <div className="accordcount">
          <div className="card">
            <div className="card-header" id="headingFive">
              <h2 className="mb-0">
                <button className="btn btn-link btn-block text-left collapsed" style={accordionHeadBtn} type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                  Collapsible Group Item #3
        </button>
              </h2>
            </div>
            <div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#accordionExample">
              <div className="card-body">
                And lastly, the placeholder content for the third and final accordion panel. This panel is hidden by default.
              </div>
            </div>
          </div>
        </div>
        <div className="accordcount">
          <div className="card">
            <div className="card-header" id="headingSix">
              <h2 className="mb-0">
                <button className="btn btn-link btn-block text-left collapsed" style={accordionHeadBtn} type="button" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                  Collapsible Group Item #3
        </button>
              </h2>
            </div>
            <div id="collapseSix" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
              <div className="card-body">
                And lastly, the placeholder content for the third and final accordion panel. This panel is hidden by default.
              </div>
            </div>
          </div>
        </div>
        <div className="accordcount">
          <div className="card">
            <div className="card-header" id="headingSeven">
              <h2 className="mb-0">
                <button className="btn btn-link btn-block text-left collapsed" style={accordionHeadBtn} type="button" data-toggle="collapse" data-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSix">
                  Collapsible Group Item #3
        </button>
              </h2>
            </div>
            <div id="collapseSeven" className="collapse" aria-labelledby="headingSeven" data-parent="#accordionExample">
              <div className="card-body">
                And lastly, the placeholder content for the third and final accordion panel. This panel is hidden by default.
              </div>
            </div>
          </div>
          <div className="accordcount">
            <div className="card">
              <div className="card-header" id="headingEight">
                <h2 className="mb-0">
                  <button className="btn btn-link btn-block text-left collapsed" style={accordionHeadBtn} type="button" data-toggle="collapse" data-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                    Collapsible Group Item #3
        </button>
                </h2>
              </div>
              <div id="collapseEight" className="collapse" aria-labelledby="headingEight" data-parent="#accordionExample">
                <div className="card-body">
                  And lastly, the placeholder content for the third and final accordion panel. This panel is hidden by default.
              </div>
              </div>
            </div>
          </div>
          <div className="accordcount">
            <div className="card">
              <div className="card-header" id="headingNine">
                <h2 className="mb-0">
                  <button className="btn btn-link btn-block text-left collapsed" style={accordionHeadBtn} type="button" data-toggle="collapse" data-target="#collapseNine" aria-expanded="false" aria-controls="collapseEight">
                    Collapsible Group Item #3
        </button>
                </h2>
              </div>
              <div id="collapseNine" className="collapse" aria-labelledby="headingNine" data-parent="#accordionExample">
                <div className="card-body">
                  And lastly, the placeholder content for the third and final accordion panel. This panel is hidden by default.
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      


    </div>
  )
}
