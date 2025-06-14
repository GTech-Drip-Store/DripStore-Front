import './Title.css'

// Componente para os titulos menores da page em cor cinza
export const Title = ({ children, width, height, margin, display, justifyContent, fontSize, color, lineHeight,
    fontWeight, letterSpacing
}) => {
    return (
        <div className="title-content"
            style={{
                width: width,
                height: height,
                margin: margin,
                display: display,
                justifyContent: justifyContent,
                fontSize: fontSize,
                color: color,
                lineHeight: lineHeight,
                fontWeight: fontWeight,
                letterSpacing: letterSpacing,
            }}
        >{children}</div>
    );
};