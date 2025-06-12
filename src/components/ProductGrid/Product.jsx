import './Product.css';

export const Product = ({imageUrl, categoryValue, titleValue, priceOld, priceNew}) => {
    return(
        <div className='box-card'>
            <div className='box-card-image'>
                <img src={imageUrl} alt={titleValue} />
            </div>

            <div className='box-card-content'>
                <span className='category-content'>{categoryValue}</span>
                <span className='category-title'>{titleValue}</span>

                <div className='box-price-content'>
                    <span className='price-old'>{priceOld}</span>
                    <span className='price-new'>{priceNew}</span>
                </div>
            </div>
        </div>
    );
};