
import { Link, useLocation } from 'react-router-dom';

export const Useful = ({ margin, color, textDecoration, to, value, target }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <p style={{ margin: margin }}>
      <Link
        style={{
          color: isActive ? '#C92071' : color,
          textDecoration: isActive ? 'underline' : textDecoration,
          fontWeight: isActive ? 'bold' : 'normal',
          textUnderlineOffset: (isActive || textDecoration === 'underline') ? '0.125rem' : undefined
        }}
        to={to}
        target={target}
      >
        {value}
      </Link>

    </p>
  );
};
