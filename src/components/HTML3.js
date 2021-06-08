import React from 'react'
import { Moduletemp } from "./Moduletemp";
export const HTML3 = (props) => {




    return (
        <div>

            <div class="container">
            <div style={{ textAlign: 'left' }}>
              
            </div>
                <div class="row">
                    <div class="col-sm firstindex">
                        <div className="HTMLCardIndex">
                            <div className="HTMLCardModulepts">{props.infot.pts}</div>
                            <div className="HTMLCardModuleno">{props.infot.mod}</div>

                            <div className="HTMLCardListIndex"><i className="fa fa-code" style={{ color: 'rgb(111, 0, 202)' }}> </i > {props.infot.topic}</div>

                            <ul className="nobullets">
                                <li><a className="tablinks tbls" href={"#" + props.infot.tab1} ><i class="fa fa-cube"></i>{props.infot.line1} </a></li>
                                <li><a className="tablinks tbls" href={"#" + props.infot.tab2}  ><i class="fa fa-cube"></i>{props.infot.line2} </a></li>
                                <li><a className="tablinks tbls" href={"#" + props.infot.tab3}  ><i class="fa fa-cube"></i> {props.infot.line3}</a></li>
                                <li><a className="tablinks tbls" href={"#" + props.infot.tab4}  ><i class="fa fa-cube"></i> {props.infot.line4}</a></li>
                            </ul>

                        </div>
                    </div>
                    <div class="col-sm" >
                        <div className="HTMLCardIndex" style={{padding:'0'}}>
                        <video width="100%" height="100%" poster="videobgm1.jpg" controls>
                    <source src="m1v.mp4" type="video/mp4" />
                    <source src="m1v.ogg" type="video/ogg" />
                        Your browser does not support HTML video.
</video>
                            
                            

                        </div>
                    </div>
                    <div class="col-sm secondindex">
                        <div className="HTMLCardIndex">
                            <div className="HTMLCardModulepts">{props.infot.pts}</div>
                            <div className="HTMLCardModuleno">{props.infot.mod}</div>

                            <div className="HTMLCardListIndex"><i className="fa fa-code" style={{ color: 'rgb(111, 0, 202)' }}> </i > {props.infot.topic}</div>

                            <ul className="nobullets">
                                <li><a className="tablinks tbls" href={"#" + props.infot.tab1} ><i class="fa fa-cube"></i>{props.infot.line1} </a></li>
                                <li><a className="tablinks tbls" href={"#" + props.infot.tab2}  ><i class="fa fa-cube"></i>{props.infot.line2} </a></li>
                                <li><a className="tablinks tbls" href={"#" + props.infot.tab3}  ><i class="fa fa-cube"></i> {props.infot.line3}</a></li>
                                <li><a className="tablinks tbls" href={"#" + props.infot.tab4}  ><i class="fa fa-cube"></i> {props.infot.line4}</a></li>
                            </ul>

                        </div>
                    </div>
                </div>



            </div>
            <div className="mainmodule">
                <Moduletemp />
            </div>

        </div>
    )
}
