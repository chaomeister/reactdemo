import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Square from './Square';
import registerServiceWorker from './registerServiceWorker';

const squareColors = ["red", "blue", "green"];
// const squares = squareColors.map((color, index)=>{
//   return <Square key={index} classToUseForHeader={color}/>
// });
const squares = squareColors.map((color, index)=> //this is the same thing as the one above
  <Square key={index} classToUseForHeader={color}/>
);
const makeSquares = (<div>
    {squares}
  </div>);

ReactDOM.render(makeSquares, document.getElementById('root'));
registerServiceWorker();
