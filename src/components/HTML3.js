import React from 'react'

export const HTML3 = () => {
   
    const sendopenCity = (cityName,j) => {
        window.openCity(cityName,j);

    };
    return (
        <div>

            <div class="container">
                <div class="row">
                    <div class="col-sm">
                        <div className="HTMLCardIndex">
                            <div className="HTMLCardModulepts">10 Pts</div>
                            <div className="HTMLCardModuleno">Module 1</div>

                            <div className="HTMLCardListIndex"><i className="fa fa-code" style={{color:'rgb(111, 0, 202)'}}> </i > Introduction to HTML</div>
                            <li> <a className="tablinks" href="#learnmodule" onClick={() => { sendopenCity("tab1",'0') }} id="defaultOpen">What is HTML?</a></li>
                            <li> <a className="tablinks" href="#learnmodule" onClick={() => { sendopenCity("tab2",'1') }} >History of HTML</a></li>
                            <li><a className="tablinks" href="#learnmodule" onClick={() => { sendopenCity("tab3",'2') }} >Developement setup</a></li>
                            <li><a className="tablinks" href="#learnmodule" onClick={() => { sendopenCity("tab4",'3') }} >An basic HTML page</a></li>


                        </div>
                    </div>
                    <div class="col-sm">
                    <div className="HTMLCardIndex">
                            <div className="HTMLCardModuleno">Module 1</div>
                           <p style={{paddingTop:'20px',fontSize:'17px'}}> <i className="fa fa-clock-o" style={{color:'rgb(111, 0, 202)',fontSize:'22px',verticalAlign:'top'}}></i> Estimated time : 4-5 minutes</p>
                           <p style={{fontSize:'17px'}}> <i className="fa fa-cubes" style={{color:'rgb(111, 0, 202)',fontSize:'22px',verticalAlign:'top'}}></i> Level : <span style={{color:'#0ab800'}}>Basic</span></p>
                           <p style={{fontSize:'17px'}}> <i className="fa fa-star" style={{color:'rgb(111, 0, 202)',fontSize:'22px',verticalAlign:'top'}}></i> points : 10</p>
                           <a href="/" className="startbtn">Start</a>

                        </div>
                    </div>
                </div>
                
            </div>

        </div>
    )
}
