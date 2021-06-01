import React from 'react'
import { Moduletemp } from "./Moduletemp";
export const HTML3 = (props) => {




    return (
        <div>

            <div class="container">
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
                    <div class="col-sm">
                        <div className="HTMLCardIndex">
                            <div className="HTMLCardModuleno">{props.infot.mod}</div>
                            <p style={{ paddingTop: '20px', fontSize: '17px' }}> <i className="fa fa-clock-o" style={{ color: 'rgb(111, 0, 202)', fontSize: '22px', verticalAlign: 'top' }}></i> Estimated time : {props.infot.time} minutes</p>
                            <p style={{ fontSize: '17px' }}> <i className="fa fa-cubes" style={{ color: 'rgb(111, 0, 202)', fontSize: '22px', verticalAlign: 'top' }}></i> Level : <span style={{ color: '#0ab800' }}>{props.infot.level}</span></p>
                            <p style={{ fontSize: '17px' }}> <i className="fa fa-star" style={{ color: 'rgb(111, 0, 202)', fontSize: '22px', verticalAlign: 'top' }}></i> points : {props.infot.ptsn}</p>
                            <a href="/learnmodule " className="startbtn">Start</a>
                            
                            

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
