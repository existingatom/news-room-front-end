import React from 'react';
import './landing.css';

function Landing(props) {
    const { h,name, but } = props;

  return (
    <div className="firstbg">
      <div className="mrg">{h}</div>
      <div className="hrg">
           {name}
      </div>
      <button type="button" className="button">
        <span className="button-content">{but}</span>
      </button>
      <div className="margin"></div>
    </div>
  );
}

export default Landing;