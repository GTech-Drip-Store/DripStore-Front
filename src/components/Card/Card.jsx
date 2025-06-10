import './Card.css';

export const Card = ({ discount, title, buttonText, image, bgColor, margin }) => {
  return (
    <div className="card" style={{ backgroundColor: bgColor, margin: margin }}>
      <div className="card-left">
        <span className="badge">{discount}</span>
        <h3 className="card-title">{title}</h3>
        <button className="buy-btn">{buttonText}</button>
      </div>
      <div className="card-right">
        <img src={image} alt={title} className="card-image" />
      </div>
    </div>
  );
};
