import React from 'react'

export const HTML4 = (props) => {



    return (
        <div>

            <div className="container" id="scrolltotabcontent" style={{fontFamily:"calibri",fontSize:'19px'}}>
                <div className="tabcontent">
                    <div className="childtabcontent">
                        <div id={props.infot.tab1} className="scrollhelper"></div>
                        <div className="HTMLCardListIndex" >{props.infot.line1} </div>
                        {props.infot.t1p1}
                    </div>

                    <div className="childtabcontent">
                        <div id={props.infot.tab2} className="scrollhelper"></div>
                        <div className="HTMLCardListIndex" >{props.infot.line2} </div>
                        {props.infot.t2p1}
                    </div>

                    <div className="childtabcontent">
                        <div id={props.infot.tab3} className="scrollhelper"></div>
                        <div className="HTMLCardListIndex" >{props.infot.line3} </div>
                        {props.infot.t3p1}
                    </div>
                    <div className="childtabcontent">
                        <div id={props.infot.tab4} className="scrollhelper"></div>
                        <div className="HTMLCardListIndex" >{props.infot.line4} </div>
                        {props.infot.t4p1}
                    </div>
                </div>
            </div>
        </div>
    )
}
