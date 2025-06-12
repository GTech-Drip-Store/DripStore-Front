export default function Slide({ title, description, image }) {
    return (
        <div className="slide-content">
            <div className="text-content">
                <h4>Melhores ofertas personalizadas</h4>
                <h2>{title}</h2>
                <p>{description}</p>
                <button>Ver Ofertas</button>
            </div>
            <div className="image-content">
                <img src={image} alt={title} />
            </div>
        </div>
    );
}
