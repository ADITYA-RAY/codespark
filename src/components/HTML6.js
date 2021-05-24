import React from 'react'
import { HTML3 } from "./HTML3";
import { HTML4 } from "./HTML4";
var HTML3obj1 = {
    pts: "10 Pts",
    mod: "Module 1",
    topic: ' Introduction to HTML',
    line1: ' What is HTML?',
    line2: ' History of HTML',
    line3: ' Developement setup',
    line4: ' An basic HTML page',
    time: '4-5',
    level: 'Basic',
    ptsn: '10',
    tab1:"tab1",
    tab2:"tab2",
    tab3:"tab3",
    tab4:"tab4",
    tab1no:'0',
    tab2no:'1',
    tab3no:'2',
    tab4no:'3',
}

var HTML3obj2 = {
    pts: "10 Pts",
    mod: "Module 2",
    topic: ' Introduction to HTML',
    line1: ' What is HTML?',
    line2: ' History of HTML',
    line3: ' Developement setup',
    line4: ' An basic HTML page',
    time: '4-5',
    level: 'Basic',
    ptsn: '10',
    tab1:'tab5',
    tab2:'tab6',
    tab3:'tab7',
    tab4:'tab8',
    tab1no:'4',
    tab2no:'5',
    tab3no:'6',
    tab4no:'7',
}


var HTML3obj3 = {
    pts: "10 Pts",
    mod: "Module 3",
    topic: ' Introduction to HTML',
    line1: ' What is HTML?',
    line2: ' History of HTML',
    line3: ' Developement setup',
    line4: ' An basic HTML page',
    time: '4-5',
    level: 'Basic',
    ptsn: '10',
    tab1:'tab9',
    tab2:'tab10',
    tab3:'tab11',
    tab4:'tab12',
    tab1no:'8',
    tab2no:'9',
    tab3no:'10',
    tab4no:'11',
}
export const HTML6 = () => {
    return (
        <div>

            <div id="autotab1" className="autotabcontent">
                <div className="HTML1-main-content">
                    
                        <HTML3 infot={HTML3obj1} />
                        <HTML4 infot={HTML3obj1} />
                    
                </div>
            </div>

            <div id="autotab2" className="autotabcontent">

                <>
                    <div className="HTML1-main-content">
                        <HTML3 infot={HTML3obj2} />
                        <HTML4 infot={HTML3obj2} />
                
                    </div>
                </>

            </div>

            <div id="autotab3" className="autotabcontent">

                <>
                    <div className="HTML1-main-content">
                    <HTML3 infot={HTML3obj3} />
                        <HTML4 infot={HTML3obj3} />
                        
                    </div>
                </>

            </div>

        </div>
    )
}
