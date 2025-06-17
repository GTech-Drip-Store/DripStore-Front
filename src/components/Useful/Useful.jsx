
import { Link, useLocation } from 'react-router-dom';

export const Useful = ({ margin, color, textDecoration, to, value, target }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <p style={{ margin: margin }}>
      <Link
        style={{
          color: isActive ? '#C92071' : color,
          textDecoration: textDecoration,
          fontWeight: isActive ? 'bold' : 'normal',
          textDecoration: isActive ? 'underline' : 'none',
          textUnderlineOffset: '0.125rem'
        }}
        to={to}
        target={target}
      >
        {value}
      </Link>
    </p>
  );
};
