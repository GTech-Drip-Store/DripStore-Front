import './Title.css'

// Componente para os titulos menores da page em cor cinza
export const Title = ({ children, width, height, margin, display, alignItems, justifyContent }) => {
    return (
        <div className="title-content"
            style={{
                width: width,
                height: height,
                margin: margin,
                display: display,
                alignItems: alignItems,
                justifyContent: justifyContent
            }}
        >{children}</div>
    );
};