import React from 'react'

export const Mainco = () => {


    return (
        <div>

            <div className="mark" id="#mainco"></div>
            <div className="mark2">
                <div className="container">
                    <div className="row">
                        <div className="col-sm">
                            <div className="cardmark2">
                                <img src="html-logo.png" width="250px" alt="" data-aos="fade-up" />
                                <div className="title t1" data-aos="fade-up" data-aos-duration="1400">
                                    HTML
                                </div>
                                <div className="cardcontent" data-aos="fade-up">
                                    <p>HTML stands for Hyper Text Markup Language and is very basic to make a website. It is the first step towards becoming a web developer. It is the skeleton of any website.</p>
                                </div>
                                <a data-aos="fade-up" className="learnbtn b1" href="/learnhtml">Learn HTML</a>

                            </div>
                        </div>
                        <div className="col-sm">
                            <div className="cardmark2">
                                <img src="css-logo.png" alt="" width="250px" data-aos="fade-up" />
                                <div className="title t2" data-aos="fade-up">
                                    CSS
                                </div>
                                <div className="cardcontent" data-aos="fade-up">
                                    <p>CSS stands for Cascading Style Sheets. It is used to design beautiful webpages. It describes how HTML elements should be displayed and decides the overall appearence.</p>
                                </div>
                                <a data-aos="fade-up" className="learnbtn b2" href="/learncss">Learn CSS</a>
                            </div>
                        </div>
                        <div className="col-sm">
                            <div className="cardmark2">
                                <img src="js-logo.png" alt="" width="250px" data-aos="fade-up" />
                                <div className="title t3" data-aos="fade-up">
                                    Javascript
                                </div>
                                <div className="cardcontent" data-aos="fade-up">
                                    <p>Javascript is the programming language of web. It is also one of the most popular programming language in the world. It is used to make interactive webpages.</p>
                                </div>
                                <a data-aos="fade-up" className="learnbtn b3" href="/learnjavascript">Learn Javascript</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
