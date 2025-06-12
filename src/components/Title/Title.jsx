import './Title.css'

// Componente para os titulos menores da page em cor cinza
export const Title = ({ children, width, height, margin, display, justifyContent }) => {
    return (
        <div className="title-content"
            style={{
                width: width,
                height: height,
                margin: margin,
                display: display,
                justifyContent: justifyContent,
            }}
        >{children}</div>
    );
};