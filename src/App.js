import './App.css';
import './app.scss';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Route, Switch } from "react-router-dom";
import { Topnav } from "./components/Topnav";
import { Hero } from "./components/Hero";
import { Mainco } from "./components/Mainco";
import { Slidethree } from "./components/Slidethree";
import { Slidefour } from "./components/Slidefour";
import { Footer } from "./components/Footer";
import { LearnHTML } from "./components/LearnHTML";
import { LearnCSS } from "./components/LearnCSS";
import { LearnJavascript } from "./components/LearnJavascript";
import { Moduletemp } from "./components/Moduletemp";
import { Articlebase } from "./components/Articlebase";



function App() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
    AOS.refresh();
  }, []);
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Topnav />
          <Hero />
          <Mainco />
          <Slidethree />
          <Slidefour />
          <Footer />
        </Route>
        <Route path="/learnhtml" component={LearnHTML} />
        <Route path="/learncss" component={LearnCSS} />
        <Route path="/learnjavascript" component={LearnJavascript} />
        <Route path="/learnmodule" component={Moduletemp} />
        <Route path="/article" component={Articlebase} />
      </Switch>


    </>
  );
}

export default App;
