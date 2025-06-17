import './MiniProduct.css';

export const MiniProduct = ({ margin, backgroundColor }) => {
    return (
        <div className='box-mini-product'
            style={{
                margin: margin,
                backgroundColor: backgroundColor,
            }}
        >

            <img src='../../src/assets/airjordan.png' alt=''/>

        </div>
    );
};