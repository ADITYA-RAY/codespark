import React from 'react'

export const HTML3 = (props) => {

    const sendopenCity = (cityName, j) => {
        if(j==0) {
            cityName=props.infot.tab1;
            j=props.infot.tab1no
    }
    if(j==1) {
        cityName=props.infot.tab2;
        j=props.infot.tab2no
}
if(j==2) {
    cityName=props.infot.tab3;
    j=props.infot.tab3no
}
if(j==3) {
    cityName=props.infot.tab4;
    j=props.infot.tab4no
}
        window.openCity(cityName, j);

    };
    return (
        <div>

            <div class="container">
                <div class="row">
                    <div class="col-sm">
                        <div className="HTMLCardIndex">
                            <div className="HTMLCardModulepts">{props.infot.pts}</div>
                            <div className="HTMLCardModuleno">{props.infot.mod}</div>

                            <div className="HTMLCardListIndex"><i className="fa fa-code" style={{ color: 'rgb(111, 0, 202)' }}> </i > {props.infot.topic}</div>
                            <ul className="nobullets">
                                <li> <a className="tablinks" href="#learnmodule" onClick={() => { sendopenCity("tab1", '0') }} id="defaultOpen"><i class="fa fa-cube"></i>{props.infot.line1} </a></li>
                                <li> <a className="tablinks" href="#learnmodule" onClick={() => { sendopenCity("tab2", '1') }} ><i class="fa fa-cube"></i>{props.infot.line2} </a></li>
                                <li><a className="tablinks" href="#learnmodule" onClick={() => { sendopenCity("tab3", '2') }} ><i class="fa fa-cube"></i> {props.infot.line3}</a></li>
                                <li><a className="tablinks" href="#learnmodule" onClick={() => { sendopenCity("tab4", '3') }} ><i class="fa fa-cube"></i> {props.infot.line4}</a></li>
                            </ul>

                        </div>
                    </div>
                    <div class="col-sm">
                        <div className="HTMLCardIndex">
                            <div className="HTMLCardModuleno">{props.infot.mod}</div>
                            <p style={{ paddingTop: '20px', fontSize: '17px' }}> <i className="fa fa-clock-o" style={{ color: 'rgb(111, 0, 202)', fontSize: '22px', verticalAlign: 'top' }}></i> Estimated time : {props.infot.time} minutes</p>
                            <p style={{ fontSize: '17px' }}> <i className="fa fa-cubes" style={{ color: 'rgb(111, 0, 202)', fontSize: '22px', verticalAlign: 'top' }}></i> Level : <span style={{ color: '#0ab800' }}>{props.infot.level}</span></p>
                            <p style={{ fontSize: '17px' }}> <i className="fa fa-star" style={{ color: 'rgb(111, 0, 202)', fontSize: '22px', verticalAlign: 'top' }}></i> points : {props.infot.ptsn}</p>
                            <a href="/" className="startbtn">Start</a>

                        </div>
                    </div>
                </div>


                

            </div>

        </div>
    )
}
