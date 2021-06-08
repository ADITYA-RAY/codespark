import React from 'react'
import { HTML3 } from "./HTML3";
import { HTML4 } from "./HTML4";

var code = {
html: "html", DOCTYPEhtml: '!DOCTYPE html', head: 'head', title: 'title', body: 'body', h1: 'h1', p: 'p',

  htmlc: "/html", headc: '/head', titlec: '/title', bodyc: '/body', h1c: '/h1', pc: '/p',
}

//Module 1 props========================//
var HTML3obj1 = {
    pts: "10 Pts", mod: "Module 1",
    topic: ' Introduction to HTML',
    line1: ' What is HTML?',
    line2: ' History of HTML',
    line3: ' Developement setup',
    line4: ' An basic HTML page',
    time: '4-5', level: 'Basic', ptsn: '10',
    tab1: "tab1", tab2: "tab2", tab3: "tab3", tab4: "tab4",
    tab1no: '0', tab2no: '1', tab3no: '2', tab4no: '3',
    t1p1: <div>
        <p>HTML stands for Hyper Text Markup Language, which is the most widely used language on
        Web to develop web pages. HTML was created by Berners-Lee in late 1991 but "HTML 2.0" was
        the first standard HTML specification which was published in 1995. HTML 4.01 was a major
        version of HTML and it was published in late 1999. Though HTML 4.01 version is widely used
        but currently we are having HTML-5 version which is an extension to HTML 4.01, and this
        version was published in 2012.</p>
        <div className="nobullets">
            <li><i className="fa fa-angle-double-right"></i> HTML stands for Hyper Text Markup Language</li>
            <li><i className="fa fa-angle-double-right"></i> HTML is the standard markup language for creating Web pages</li>
            <li><i className="fa fa-angle-double-right"></i> HTML consists of a series of elements</li>
            <li><i className="fa fa-angle-double-right"></i> HTML describes the structure of a Web page</li>
            <li><i className="fa fa-angle-double-right"></i> HTML elements tell the browser how to display the content</li>
            <li><i className="fa fa-angle-double-right"></i> HTML elements label pieces of content such as "this is a heading", "this is a paragraph", "this is a link", etc.</li>
        </div>
    </div>

    ,
    t2p1: <>
        <p>HTML was created by Sir Tim Berners-Lee in late 1991 but was not released officially,
        published in 1995 as HTML 2.0. HTML 4.01 was published in late 1999 and was a major version
        of HTML.HTML is a very evolving markup language and has evolved with various versions
         updating.</p>
        <p>HTML is a very evolving markup language and has evolved with various versions updating.
        Long before its revised standards and specifications are carried in, each version has
        allowed its user to create web pages in a much easier and prettier way and make sites
        very efficient.</p>
    </>,

    t4p1: <>
        <div className="codecard">
            <div className="langside">HTML</div>
            <div className="codemod" >
                <e>{code.DOCTYPEhtml}</e>
                <br />
                <e>{code.html}</e>
                <e>{code.head}</e>
                <e>{code.title}<k>My first website!</k>{code.titlec}</e>
                <e>{code.headc}</e>
                <e>{code.body}</e>
                <e>{code.h1}<k>My first website!</k>{code.h1c}</e>
                <e>{code.p}<k>Welcome to the first website made by me.</k>{code.pc}</e>
                <e>{code.bodyc}</e>
                <e>{code.htmlc}</e>


            </div>

        </div>

    </>
}
//Module 2 props========================//
var HTML3obj2 = {
    pts: "10 Pts", mod: "Module 2",
    topic: ' Introduction to HTML',
    line1: ' What is HTML?',
    line2: ' History of HTML',
    line3: ' Developement setup',
    line4: ' An basic HTML page',
    time: '4-5', level: 'Basic', ptsn: '10',
    tab1: 'tab5', tab2: 'tab6', tab3: 'tab7', tab4: 'tab8',
    tab1no: '4', tab2no: '5', tab3no: '6', tab4no: '7',
    t1p1: "ankit",

}
//Module 3 props========================//
var HTML3obj3 = {
    pts: "10 Pts", mod: "Module 3",
    topic: ' Introduction to HTML',
    line1: ' What is HTML?',
    line2: ' History of HTML',
    line3: ' Developement setup',
    line4: ' An basic HTML page',
    time: '4-5', level: 'Basic', ptsn: '10',
    tab1: 'tab9', tab2: 'tab10', tab3: 'tab11', tab4: 'tab12',
    tab1no: '8', tab2no: '9', tab3no: '10', tab4no: '11',


}
//Module 4 props========================//
var HTML3obj4 = {
    pts: "10 Pts", mod: "Module 4",
    topic: ' Introduction to HTML',
    line1: ' What is HTML?',
    line2: ' History of HTML',
    line3: ' Developement setup',
    line4: ' An basic HTML page',
    time: '4-5', level: 'Basic', ptsn: '10',
    tab1: 'tab13', tab2: 'tab14', tab3: 'tab15', tab4: 'tab16',
    tab1no: '12', tab2no: '13', tab3no: '14', tab4no: '15',

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
    time: '4-5', level: 'Basic', ptsn: '10',
    tab1: 'tab17', tab2: 'tab18', tab3: 'tab19', tab4: 'tab20',
    tab1no: '16', tab2no: '17', tab3no: '18', tab4no: '19',

}
//Module 6 props========================//
var HTML3obj6 = {
    pts: "10 Pts",
    mod: "Module 6",
    topic: ' Introduction to HTML',
    line1: ' What is HTML?',
    line2: ' History of HTML',
    line3: ' Developement setup',
    line4: ' An basic HTML page',
    time: '4-5', level: 'Basic', ptsn: '10',
    tab1: 'tab21', tab2: 'tab22', tab3: 'tab23', tab4: 'tab24',
    tab1no: '20', tab2no: '21', tab3no: '22', tab4no: '23',

}
//Module 7 props========================//
var HTML3obj7 = {
    pts: "10 Pts",
    mod: "Module 7",
    topic: ' Introduction to HTML',
    line1: ' What is HTML?',
    line2: ' History of HTML',
    line3: ' Developement setup',
    line4: ' An basic HTML page',
    time: '4-5', level: 'Basic', ptsn: '10',
    tab1: 'tab25', tab2: 'tab26', tab3: 'tab27', tab4: 'tab28',
    tab1no: '24', tab2no: '25', tab3no: '26', tab4no: '27',

}
//Module 8 props========================//
var HTML3obj8 = {
    pts: "10 Pts",
    mod: "Module 8",
    topic: ' Introduction to HTML',
    line1: ' What is HTML?',
    line2: ' History of HTML',
    line3: ' Developement setup',
    line4: ' An basic HTML page',
    time: '4-5', level: 'Basic', ptsn: '10',
    tab1: 'tab29', tab2: 'tab30', tab3: 'tab31', tab4: 'tab32',
    tab1no: '28', tab2no: '29', tab3no: '30', tab4no: '31',

}
//Module 9 props========================//
var HTML3obj9 = {
    pts: "10 Pts",
    mod: "Module 9",
    topic: ' Introduction to HTML',
    line1: ' What is HTML?',
    line2: ' History of HTML',
    line3: ' Developement setup',
    line4: ' An basic HTML page',
    time: '4-5', level: 'Basic', ptsn: '10',
    tab1: 'tab33', tab2: 'tab34', tab3: 'tab35', tab4: 'tab36',
    tab1no: '32', tab2no: '33', tab3no: '34', tab4no: '35',

}
//Module 10 props========================//
var HTML3obj10 = {
    pts: "10 Pts",
    mod: "Module 10",
    topic: ' Introduction to HTML',
    line1: ' What is HTML?',
    line2: ' History of HTML',
    line3: ' Developement setup',
    line4: ' An basic HTML page',
    time: '4-5', level: 'Basic', ptsn: '10',
    tab1: 'tab37', tab2: 'tab38', tab3: 'tab39', tab4: 'tab40',
    tab1no: '36', tab2no: '37', tab3no: '38', tab4no: '39',

}
//Module 11 props========================//
var HTML3obj11 = {
    pts: "10 Pts",
    mod: "Module 11",
    topic: ' Introduction to HTML',
    line1: ' What is HTML?',
    line2: ' History of HTML',
    line3: ' Developement setup',
    line4: ' An basic HTML page',
    time: '4-5', level: 'Basic', ptsn: '10',
    tab1: 'tab41', tab2: 'tab42', tab3: 'tab43', tab4: 'tab44',
    tab1no: '40', tab2no: '41', tab3no: '42', tab4no: '43',

}
//Module 12 props========================//
var HTML3obj12 = {
    pts: "10 Pts",
    mod: "Module 12",
    topic: ' Introduction to HTML',
    line1: ' What is HTML?',
    line2: ' History of HTML',
    line3: ' Developement setup',
    line4: ' An basic HTML page',
    time: '4-5', level: 'Basic', ptsn: '10',
    tab1: 'tab45', tab2: 'tab46', tab3: 'tab47', tab4: 'tab48',
    tab1no: '44', tab2no: '45', tab3no: '46', tab4no: '47',

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
                    <HTML3 infot={HTML3obj6} />
                    <HTML4 infot={HTML3obj6} />
                </div>
                <div id="autotab7" className="autotabcontent">
                    <HTML3 infot={HTML3obj7} />
                    <HTML4 infot={HTML3obj7} />
                </div>
                <div id="autotab8" className="autotabcontent">
                    <HTML3 infot={HTML3obj8} />
                    <HTML4 infot={HTML3obj8} />
                </div>
                <div id="autotab9" className="autotabcontent">
                    <HTML3 infot={HTML3obj9} />
                    <HTML4 infot={HTML3obj9} />
                </div>
                <div id="autotab10" className="autotabcontent">
                    <HTML3 infot={HTML3obj10} />
                    <HTML4 infot={HTML3obj10} />
                </div>
                <div id="autotab11" className="autotabcontent">
                    <HTML3 infot={HTML3obj11} />
                    <HTML4 infot={HTML3obj11} />
                </div>
                <div id="autotab12" className="autotabcontent">
                    <HTML3 infot={HTML3obj12} />
                    <HTML4 infot={HTML3obj12} />
                </div>
            </div>
        </div>
    )
}
