import { Routes, Route, useLocation } from "react-router-dom";
import './App.css'
import Footer from './footer'
import Landing from './landing'
import Navbar from './nav.jsx'
import Slider from './slider.jsx'
import { SliderImage } from './sliderimage'
import { SliderText } from './slidertext'
import Explore from './explore'
import Learn from './learn'

const App = () => {
  const location = useLocation();

  const getLandingProps = () => {
    if (location.pathname === "/explore") {
      return {
        h: "Swipe down to start exploring!",
        name: "Dadi ka nuska: Reading through others' writeups help one to improve faster!",
        but: "Go down to fill the contact us form."
      };
    } else if (location.pathname === "/slider") {
      return {
        h: "Swipe down to know us and our tiny steps!!",
        name: "Free tip: Take the first step towards your dream. Your next step will be in your favourite news agency.",
        but: "Go down to fill the contact us form."
      };
    } else if (location.pathname === "/learn") {
      return {
        h: "Swipe down to know about various courses!",
        name: "A secret: Learning now gets easier for now there are people who will hold you tight not letting you fall even on those darkest nights!!",
        but: "Go down to fill the contact us form."
      };
    }
    else if (location.pathname === "/contact") {
      return {
        h: "Have a doubt or a query? We are here for you!",
        name: "Go down and fill our contact us form. We will reach back with you within two days.",
        but: "Go down to fill the contact us form."
      };
    }
    else{
      return {
        h: "Welcome to News-Room!!",
        name: "This is a hidden jewel for all the aspiring journalists. To dive in, click on the various options available at the top of the page!",
        but: "Go down to fill the contact us form."
      };
    }
  };

  return (
    <>
      <Navbar />
      <Landing {...getLandingProps()} />
      <Routes>
        <Route path="/explore" element={<Explore />} />
        <Route path="/slider" element={<Slider slides={SliderImage} words={SliderText} />} />
        <Route path="/learn" element={<Learn />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
