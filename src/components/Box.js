import React from 'react';
import SP500 from './SP500';
import Rates from './Rates';

const Box = () => {
  return (
    <div className="container">
      <div className="main-box">
        <div className = "max-size">
        <SP500 />
        </div>
        <div className='row'>
          <Rates />
        </div>
      </div>
    </div>
  );
};

export default Box;
