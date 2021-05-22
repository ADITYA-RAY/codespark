import React from 'react'

export const HTML2 = () => {
  const accordionHeadBtn = {
    textDecoration: 'none',
    color: 'purple'
  }

  return (
    <div>
      <div className="HTML1-side-section" id="HTML1-side-section">
        <div className="accordion" id="accordionExample">
          <div className="card">
            <div className="card-header" id="headingOne">
              <h2 className="mb-0">
                <button className="btn btn-link btn-block text-left" style={accordionHeadBtn} type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  Collapsible Group Item #1
        </button>
              </h2>
            </div>

            <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
              <div className="card-body">
                Some placeholder content for the first accordion panel. This panel is shown by default, thanks to the <code>.show</code> className.
      </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="headingTwo">
              <h2 className="mb-0">
                <button className="btn btn-link btn-block text-left collapsed" style={accordionHeadBtn} type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  Collapsible Group Item #2
        </button>
              </h2>
            </div>
            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
              <div className="card-body">
                Some placeholder content for the second accordion panel. This panel is hidden by default.
      </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="headingThree">
              <h2 className="mb-0">
                <button className="btn btn-link btn-block text-left collapsed" style={accordionHeadBtn} type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Collapsible Group Item #3
        </button>
              </h2>
            </div>
            <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
              <div className="card-body">
                And lastly, the placeholder content for the third and final accordion panel. This panel is hidden by default.
             </div>
            </div>
          </div>
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
