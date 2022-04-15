
import { useEffect, useState } from 'react';
import './App.css';
import Ball from './Ball';
import Button from './Button';


import TextWithImg from './TextWithImg';



function App() {

  const [showButton, setShowButton] = useState(true);
    const [ballTop, setBallTop] = useState(210);
    const [ballLeft, setBallLeft] = useState(370);

    const lowerBound = 560;
    const upperBound = 210;
    const rightBound = 1100;
    const leftBound = 370;

    const [goingUp, setGoingUp] = useState(1);
    const [goingLeft, setGoingLeft] = useState(1);

  useEffect(() => {

      setTimeout(() => {

          if (ballTop >=lowerBound)
              setGoingUp(-1);

          if (ballTop <=upperBound)
              setGoingUp(1);

          if (ballLeft >= rightBound)
              setGoingLeft(-1);

          if (ballLeft <= leftBound)
              setGoingLeft(1);


          setBallTop(ballTop + goingUp) 
          setBallLeft(ballLeft + goingLeft);
           
        console.log(ballTop, ballLeft);
      }, 1 * 5);

  }, [ ballTop, ballLeft ]);

  return (
    <div className="App">
          <header className="App-header">

        <Ball x={ballLeft} y={ballTop} />
        ------------------------------------------------------<br />
        <br />
        <Button text={'Increase speed'} />
        <br />
        <Button text={'Decrease speed'} />

              <TextWithImg imgUrl={'/table.png'} title={' Biliard '}>
        </TextWithImg>
        
      </header>
    </div>
  );
}

export default App;