import { useState } from 'react';
import './ColorItems.css';

export const ColorItems = () => {
  const [selectedColor, setSelectedColor] = useState(null);

  const colors = ['#6FEEFF', '#FF6969', '#5E5E5E', '#6D70B7'];

  const handleSelect = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className="color-selector-wrapper">
      {colors.map((color) => (
        <div
          key={color}
          className={`box-color-selector ${selectedColor === color ? 'selected' : ''}`}
          style={{ backgroundColor: color }}
          onClick={() => handleSelect(color)}
        />
      ))}
    </div>
  );
};
