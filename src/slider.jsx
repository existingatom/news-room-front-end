import React, { useState } from 'react'
import { SliderImage } from './sliderimage'
import { Icon } from '@iconify/react';
import './slider.css'
import { SliderText } from './slidertext.jsx'

const slider = ({ slides, words }) => {
  const [current, setCurrent] = useState(0)
  const length = slides.length

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  if (!Array.isArray(slides) || slides.length <= 0) { return null; }

  return (
    <>
      <div className='aboutus'>
        <section className='aboutustext'>ABOUT US</section>
        <section className="slider">
          <Icon icon="streamline:interface-arrows-right-circle-2-arrow-keyboard-circle-button-right" rotate={2} className="left-arrow" onClick={prevSlide} />
          <Icon icon="streamline:interface-arrows-right-circle-2-arrow-keyboard-circle-button-right" className="right-arrow" onClick={nextSlide} />
          <div className="carouesel">
            {SliderImage.map((slide, index) => {
              return (
                <div className={index === current ? 'slide active' : 'slide'} key={index}>
                  {index === current && (<img src={slide.image} className="sliderimage" />)}
                </div>
              );
            })}
            {SliderText.map((word, index) => {
              return (
                <div className={index === current ? 'slide active' : 'slide'} key={index}>
                  {index === current && (<section className="slidertext">{word.text}</section>)}
                </div>
              );
            })}
          </div>
        </section>
        <br>
        </br>
        <br>
        </br>
        <br>
        </br>
      </div>
    </>
  );
}

export default slider

