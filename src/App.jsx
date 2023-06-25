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
        h: "Welcome to News-Room!!",
        name: "To know is to learn and practice. We have a long way to go for it is just the beginning!!.",
        but: "Contact us"
      };
    } else if (location.pathname === "/slider") {
      return {
        h: "Welcome to News-Room!!",
        name: "Take the first step towards your dream. Your next step will be in your favourite news agency.",
        but: "Contact us"
      };
    } else if (location.pathname === "/learn") {
      return {
        h: "hfhewj",
        name: "Learning now gets easier for now there are people who will hold you tight not letting you fall even on those darkest nights!!.",
        but: "Contact us"
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
