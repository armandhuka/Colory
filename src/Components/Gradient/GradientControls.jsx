import React from 'react';
import RandomColorGenerator from './RandomColorGenerator';

const GradientControls = ({
  color1,
  setColor1,
  color2,
  setColor2,
  percentage1,
  setPercentage1,
  percentage2,
  setPercentage2,
  direction,
  setDirection,
  colorType,
  setColorType,
  gradientName,
  setGradientName,
}) => {
  return (
    <>
      <div className="grid grid-cols-3 mb-4 gap-2">
        <input
          type="number"
          value={percentage1}
          onChange={(e) => setPercentage1(e.target.value)}
          className="w-full h-10 p-2 bg-transparent border-2 border-[#262626] rounded outline-none"
          min="0"
          max="100"
        />
        <input
          type="number"
          value={percentage2}
          onChange={(e) => setPercentage2(e.target.value)}
          className="w-full h-10 p-2 bg-transparent border-2 border-[#262626] rounded outline-none"
          min="0"
          max="100"
        />
        <select
          value={colorType}
          onChange={(e) => setColorType(e.target.value)}
          className="w-full h-10 p-2 bg-transparent border-2 border-[#262626] rounded outline-none"
        >
          <option value="warm">Warm</option>
          <option value="cool">Cool</option>
          <option value="dark">Dark</option>
          <option value="pastel">Pastel</option>
          <option value="neon">Neon</option>
          <option value="metallic">Metallic</option>
        </select>
      </div>
      <select
        value={direction}
        onChange={(e) => setDirection(e.target.value)}
        className="w-full h-10 mb-4 p-2 bg-transparent border-2 border-[#262626] rounded outline-none"
      >
        <option value="to right">To Right</option>
        <option value="to left">To Left</option>
        <option value="to top">To Top</option>
        <option value="to bottom">To Bottom</option>
        <option value="to top right">To Top Right</option>
        <option value="to top left">To Top Left</option>
        <option value="to bottom right">To Bottom Right</option>
        <option value="to bottom left">To Bottom Left</option>
      </select>
      <input
        type="text"
        value={gradientName}
        onChange={(e) => setGradientName(e.target.value)}
        className="w-full h-10 mb-4 p-2 bg-transparent border-2 border-[#262626] rounded outline-none"
        placeholder="Enter gradient name"
      />
      <div className="flex mb-4">
        <div className="mr-2">
          <input
            type="color"
            value={color1}
            onChange={(e) => setColor1(e.target.value)}
            className="w-full h-10 bg-transparent rounded"
          />
          <button
            onClick={() => setColor1(RandomColorGenerator(colorType))}
            className="bg-[#262626] text-white px-4 py-2 rounded mt-2"
          >
            Random Color 1
          </button>
        </div>
        <div>
          <input
            type="color"
            value={color2}
            onChange={(e) => setColor2(e.target.value)}
            className="w-full h-10 bg-transparent rounded"
          />
          <button
            onClick={() => setColor2(RandomColorGenerator(colorType))}
            className="bg-[#262626] text-white px-4 py-2 rounded mt-2"
          >
            Random Color 2
          </button>
        </div>
      </div>
    </>
  );
};

export default GradientControls;
