import { useState } from 'react';
import './Icon.css';

export const Icon = ({ children, srcDefault, srcHover, width, height }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="icon-item"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="icon-circle">
                <img
                    src={isHovered ? srcHover : srcDefault}
                    alt="Ícone"
                    className="icon-image"
                />
            </div>
            <span
                className="icon-label"
                style={{ width, height }}
            >
                {children}
            </span>
        </div>
    );
};
