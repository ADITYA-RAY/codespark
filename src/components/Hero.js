import React from 'react'

export const Hero = () => {
  const mystyle1 = {
    backgroundImage: "url('http://front-end-noobs.com/jecko/img/wave-top.png')",
  };
  const mystyle2 = {
    backgroundImage: "url('http://front-end-noobs.com/jecko/img/wave-mid.png')",
  };
  const mystyle3 = {
    backgroundImage: "url('http://front-end-noobs.com/jecko/img/wave-bot.png')"
  };
  var TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };

  TxtType.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span className="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }

    setTimeout(function () {
      that.tick();
    }, delta);
  };

  window.onload = function () {
    var elements = document.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-type');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
  };

  return (

    <div>
<section id="home">
      <div className="herocenter "><div className="animate">Experince a unique way of learning for aspiring developers <span>!</span></div>


  Learn <a href="./public/index.html" className="typewrite" data-period="2000" data-type='[ "HTML", "CSS", "Javascript", "what you require!" ]'>
          <span className="wrap" ></span>
        </a>

      </div>
      <div className="moon">
        <img src="moon.png" width="200px" alt="" />
      </div>

      <div className="rocket">
        <ul className="star">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>

        </ul>
      </div>



      <div className="waveWrapper waveAnimation">
        <div className="waveWrapperInner bgTop">
          <div className="wave waveTop" style={mystyle1}></div>
        </div>
        <div className="waveWrapperInner bgMiddle">
          <div className="wave waveMiddle" style={mystyle2}></div>
        </div>
        <div className="waveWrapperInner bgBottom">
          <div className="wave waveBottom" style={mystyle3}></div>
        </div>
      </div>
      </section>
    </div>

  )
}
