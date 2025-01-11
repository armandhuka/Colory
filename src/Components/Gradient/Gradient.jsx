import React, { useState } from 'react';
import GradientBox from './GradientBox';
import GradientControls from './GradientControls';
import GradientActions from './GradientActions';

const Gradient = ({ saveGradient }) => {
  const [color1, setColor1] = useState('#ff7e5f');
  const [color2, setColor2] = useState('#feb47b');
  const [percentage1, setPercentage1] = useState(50);
  const [percentage2, setPercentage2] = useState(50);
  const [direction, setDirection] = useState('to right');
  const [gradientName, setGradientName] = useState('');
  const [colorType, setColorType] = useState('warm');
  const [isBoxVisible, setIsBoxVisible] = useState(true);

  return (
    <div
      onDoubleClick={() => setIsBoxVisible(!isBoxVisible)}
      className="min-h-screen flex flex-col items-center justify-center transition-all duration-500"
      style={{
        background: `linear-gradient(${direction}, ${color1} ${percentage1}%, ${color2} ${percentage2}%)`,
      }}
    >
      {isBoxVisible && (
        <GradientBox>
          <GradientControls
            color1={color1}
            setColor1={setColor1}
            color2={color2}
            setColor2={setColor2}
            percentage1={percentage1}
            setPercentage1={setPercentage1}
            percentage2={percentage2}
            setPercentage2={setPercentage2}
            direction={direction}
            setDirection={setDirection}
            colorType={colorType}
            setColorType={setColorType}
            gradientName={gradientName}
            setGradientName={setGradientName}
          />
          <GradientActions
            color1={color1}
            color2={color2}
            percentage1={percentage1}
            percentage2={percentage2}
            direction={direction}
            gradientName={gradientName}
            saveGradient={saveGradient}
          />
        </GradientBox>
      )}
    </div>
  );
};

export default Gradient;
