import React from 'react'

export const HTML4 = (props) => {



    return (
        <div>

            <div className="container" id="scrolltotabcontent" >
                <div id={props.infot.tab1} className="tabcontent">
                    <div className="HTMLCardListIndex" >{props.infot.line1} </div>
                    <ul className="nobullets">
                        <li><i class="fa fa-angle-double-right"></i>{props.infot.t1l1}</li><br />
                        <li><i class="fa fa-angle-double-right"></i>{props.infot.t1l2}</li><br />
                        <li><i class="fa fa-angle-double-right"></i>{props.infot.t1l3}</li><br />
                        <li><i class="fa fa-angle-double-right"></i>{props.infot.t1l4}</li><br />
                        <li><i class="fa fa-angle-double-right"></i>{props.infot.t1l5}</li><br />
                        <li><i class="fa fa-angle-double-right"></i>{props.infot.t1l6}</li><br />
                    </ul>
                </div>

                <div id={props.infot.tab2} className="tabcontent">
                <div className="HTMLCardListIndex" >{props.infot.line2} </div>
                    <ul className="nobullets">
                        <li><i class="fa fa-angle-double-right"></i>{props.infot.t2l1}</li><br />
                        <li><i class="fa fa-angle-double-right"></i>{props.infot.t2l2}</li><br />
                        <li><i class="fa fa-angle-double-right"></i>{props.infot.t2l3}</li><br />
                        <li><i class="fa fa-angle-double-right"></i>{props.infot.t2l4}</li><br />
                        <li><i class="fa fa-angle-double-right"></i>{props.infot.t2l5}</li><br />
                        <li><i class="fa fa-angle-double-right"></i>{props.infot.t2l6}</li><br />
                    </ul>
                </div>

                <div id={props.infot.tab3} className="tabcontent">
                <div className="HTMLCardListIndex" >{props.infot.line3} </div>
                    <ul className="nobullets">
                        <li><i class="fa fa-angle-double-right"></i>{props.infot.t3l1}</li><br />
                        <li><i class="fa fa-angle-double-right"></i>{props.infot.t3l2}</li><br />
                        <li><i class="fa fa-angle-double-right"></i>{props.infot.t3l3}</li><br />
                        <li><i class="fa fa-angle-double-right"></i>{props.infot.t3l4}</li><br />
                        <li><i class="fa fa-angle-double-right"></i>{props.infot.t3l5}</li><br />
                        <li><i class="fa fa-angle-double-right"></i>{props.infot.t3l6}</li><br />
                    </ul>
                </div>

                <div id={props.infot.tab4} className="tabcontent">
                <div className="HTMLCardListIndex" >{props.infot.line4} </div>
                    <ul className="nobullets">
                        <li><i class="fa fa-angle-double-right"></i>{props.infot.t4l1}</li><br />
                        <li><i class="fa fa-angle-double-right"></i>{props.infot.t4l2}</li><br />
                        <li><i class="fa fa-angle-double-right"></i>{props.infot.t4l3}</li><br />
                        <li><i class="fa fa-angle-double-right"></i>{props.infot.t4l4}</li><br />
                        <li><i class="fa fa-angle-double-right"></i>{props.infot.t4l5}</li><br />
                        <li><i class="fa fa-angle-double-right"></i>{props.infot.t4l6}</li><br />
                    </ul>
                </div>
            </div>
        </div>
    )
}
