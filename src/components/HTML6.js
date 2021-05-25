import React from 'react'
import { HTML3 } from "./HTML3";
import { HTML4 } from "./HTML4";
//Module 1 props========================//
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
    tab1: "tab1",
    tab2: "tab2",
    tab3: "tab3",
    tab4: "tab4",
    tab1no: '0',
    tab2no: '1',
    tab3no: '2',
    tab4no: '3',
}
//Module 2 props========================//
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
    tab1: 'tab5',
    tab2: 'tab6',
    tab3: 'tab7',
    tab4: 'tab8',
    tab1no: '4',
    tab2no: '5',
    tab3no: '6',
    tab4no: '7',
}
//Module 3 props========================//
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
    tab1: 'tab9',
    tab2: 'tab10',
    tab3: 'tab11',
    tab4: 'tab12',
    tab1no: '8',
    tab2no: '9',
    tab3no: '10',
    tab4no: '11',
}
//Module 4 props========================//
var HTML3obj4 = {
    pts: "10 Pts",
    mod: "Module 4",
    topic: ' Introduction to HTML',
    line1: ' What is HTML?',
    line2: ' History of HTML',
    line3: ' Developement setup',
    line4: ' An basic HTML page',
    time: '4-5',
    level: 'Basic',
    ptsn: '10',
    tab1: 'tab13',
    tab2: 'tab14',
    tab3: 'tab15',
    tab4: 'tab16',
    tab1no: '12',
    tab2no: '13',
    tab3no: '14',
    tab4no: '15',
}
//Module 5 props========================//
var HTML3obj5 = {
    pts: "10 Pts",
    mod: "Module 5",
    topic: ' Introduction to HTML',
    line1: ' What is HTML?',
    line2: ' History of HTML',
    line3: ' Developement setup',
    line4: ' An basic HTML page',
    time: '4-5',
    level: 'Basic',
    ptsn: '10',
    tab1: 'tab17',
    tab2: 'tab18',
    tab3: 'tab19',
    tab4: 'tab20',
    tab1no: '16',
    tab2no: '17',
    tab3no: '18',
    tab4no: '19',
}

export const HTML6 = () => {
    return (
        <div>
            <div className="HTML1-main-content">
                <div id="autotab1" className="autotabcontent">
                    <HTML3 infot={HTML3obj1} />
                    <HTML4 infot={HTML3obj1} />
                </div>
                <div id="autotab2" className="autotabcontent">
                        <HTML3 infot={HTML3obj2} />
                        <HTML4 infot={HTML3obj2} />
                </div>
                <div id="autotab3" className="autotabcontent">                
                        <HTML3 infot={HTML3obj3} />
                        <HTML4 infot={HTML3obj3} />
                </div>
                <div id="autotab4" className="autotabcontent">                
                        <HTML3 infot={HTML3obj4} />
                        <HTML4 infot={HTML3obj4} />
                </div>
                <div id="autotab5" className="autotabcontent">                
                        <HTML3 infot={HTML3obj5} />
                        <HTML4 infot={HTML3obj5} />
                </div>
                <div id="autotab6" className="autotabcontent">                
                        <HTML3 infot={HTML3obj5} />
                        <HTML4 infot={HTML3obj5} />
                </div>
                <div id="autotab7" className="autotabcontent">                
                        <HTML3 infot={HTML3obj5} />
                        <HTML4 infot={HTML3obj5} />
                </div>
                <div id="autotab8" className="autotabcontent">                
                        <HTML3 infot={HTML3obj5} />
                        <HTML4 infot={HTML3obj5} />
                </div>
                <div id="autotab9" className="autotabcontent">                
                        <HTML3 infot={HTML3obj5} />
                        <HTML4 infot={HTML3obj5} />
                </div>
                <div id="autotab10" className="autotabcontent">                
                        <HTML3 infot={HTML3obj5} />
                        <HTML4 infot={HTML3obj5} />
                </div>
            </div>
        </div>
    )
}
