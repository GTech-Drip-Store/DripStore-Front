import './Icon.css'

export const Icon = ({ children, src, width, height }) => {
    return (
        <div className="icon-item">
            <div className="icon-circle">
                <img src={src} alt="Icone" className="icon-image" />
            </div>
            <span className="icon-label"
                style={{
                    width: width,
                    height: height
                }}
            >{children}</span>
        </div>
    );
};