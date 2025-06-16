import { useState } from 'react';
import './SizeItems.css';

export const SizeItems = () => {
  const [selectedSize, setSelectedSize] = useState(null);

  const sizes = ['36', '37', '38', '39', '40', '41'];

  const handleSelect = (size) => {
    setSelectedSize(size);
  };

  return (
    <div className="size-selector">
      {sizes.map((size) => (
        <div
          key={size}
          className={`box-items-size ${selectedSize === size ? 'selected' : ''}`}
          onClick={() => handleSelect(size)}
        >
          {size}
        </div>
      ))}
    </div>
  );
};
