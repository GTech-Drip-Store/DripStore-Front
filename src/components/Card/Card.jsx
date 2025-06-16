import './Card.css';
import { Button } from '../Button/Button'

export const Card = ({ discount, title, buttonText, image, bgColor, margin }) => {
  return (
    <div className="card" style={{ backgroundColor: bgColor, margin: margin }}>
      <div className="card-left">
        <span className="badge">{discount}</span>
        <h3 className="card-title">{title}</h3>
        <Button
        width={'9.563rem'}
        height={'3rem'}
        children={'Comprar'}
        margin={'1.25rem 0 0 0'}
        color={'#C92071'}
        backgroundColor={'#F5F5F5'}
        />
      </div>
      <div className="card-right">
        <img src={image} alt={title} className="card-image" />
      </div>
    </div>
  );
};
