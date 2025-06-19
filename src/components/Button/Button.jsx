import { Link } from 'react-router-dom';
import './Button.css';

export const Button = ({ children, width, height, color, margin, backgroundColor, to }) => {
  return (
    <Link
      to={to}
      className="button"
      style={{
        display: 'inline-block',
        width: width,
        height: height,
        color: color,
        backgroundColor: backgroundColor,
        margin: margin,
        textAlign: 'center',
        lineHeight: height,
        textDecoration: 'none', 
      }}
    >
      {children}
    </Link>
  );
};
