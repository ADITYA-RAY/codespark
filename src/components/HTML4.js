import React from 'react'

export const HTML4 = (props) => {
  
  
    
    return (
        <div>

            <div className="container" >
            <div id={props.infot.tab1} className="tabcontent">
            <div className="HTMLCardListIndex desc" >What is HTML? </div>
            <ul className="nobullets">
           <li><i class="fa fa-angle-double-right"></i> HTML stands for Hyper Text Markup Language. </li><br/>
           <li><i class="fa fa-angle-double-right"></i> HTML is the standard markup language for creating Web pages.</li><br/>
           <li><i class="fa fa-angle-double-right"></i> HTML describes the structure of a Web page.</li><br/>
           <li><i class="fa fa-angle-double-right"></i> HTML consists of a series of elements.</li><br/>
           <li><i class="fa fa-angle-double-right"></i> HTML elements tell the browser how to display the content.</li><br/>
           <li><i class="fa fa-angle-double-right"></i> HTML elements label pieces of content such as "this is a heading", "this is a paragraph", "this is a link", etc.</li>
           </ul>
            </div>

            <div id={props.infot.tab2} className="tabcontent">
                <h3>Paris</h3>
                <p>Paris is the capital of France.</p>
            </div>

            <div id={props.infot.tab3} className="tabcontent">
                <h3>Tokyo</h3>
                <p>Tokyo is the capital of Japan.</p>
            </div>
            
            <div id={props.infot.tab4} className="tabcontent">
                <h3>Tokyo</h3>
                <p>Tokyo is the capital of Japan.</p>
            </div>
        </div>
        </div>
    )
}
