import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import './slider.css';
import { SliderImage } from './sliderimage';
import { SliderText } from './slidertext';

const Slider = () => {
  const [current, setCurrent] = useState(0);
  const length = SliderImage.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (length === 0) {
    return null;
  }

  return (
    <div className="aboutus">
      <section className="aboutustext">ABOUT US</section>
      <section className="slider">
        <Icon
          icon="streamline:interface-arrows-right-circle-2-arrow-keyboard-circle-button-right"
          rotate={2}
          className="left-arrow"
          onClick={prevSlide}
        />
        <Icon
          icon="streamline:interface-arrows-right-circle-2-arrow-keyboard-circle-button-right"
          className="right-arrow"
          onClick={nextSlide}
        />
        <div className="carousel">
          {SliderImage.map((slide, index) => (
            <div className={index === current ? 'slide active' : 'slide'} key={index}>
              {index === current && (
                <div className="slider-content">
                  <img src={slide.image} className="sliderimage" />
                  <section className="slidertext">{SliderText[index].text}</section>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Slider;
