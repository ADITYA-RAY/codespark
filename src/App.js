import './App.css';
import './app.scss';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {Topnav} from "./components/Topnav";
import {Hero} from "./components/Hero";
import {Mainco} from "./components/Mainco";
import {Slidethree} from "./components/Slidethree";
import {Slidefour} from "./components/Slidefour";

function App() {
  useEffect(() => {
    AOS.init({duration:1200});
    AOS.refresh();
  }, []);
  return (
    <>

    <Topnav/>
    <Hero/>
    <Mainco/>
    <Slidethree/>
    <Slidefour/>
    
    </>
  );
}

export default App;
