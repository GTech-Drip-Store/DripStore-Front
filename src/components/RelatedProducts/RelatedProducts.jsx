import { Title } from '../Title/Title';
import { Useful } from '../Useful/Useful';
import { Product } from '../ProductGrid/Product'
import './RelatedProducts.css'

export const RelatedProducts = () => {
    return (
        <>
            <div className="box-title-related">
                <Title>Produtos relacionados</Title>

                <div className='link-content'>
                    <Useful
                        value={'Ver todos'}
                        color={'#C92071'}
                    ></Useful>

                    <img src='../../src/assets/icons/IconArrow.png' />
                </div>
            </div>

            <div className='box-product-related'>
                <Product

                    hasDiscount={true}
                    valueDiscount={'20% OFF'}
                    imageUrl={'../../src/assets/tenis.png'}
                    categoryValue={'Tênis'}
                    titleValue={'K-Swiss V8 - Masculino'}
                    priceOld={'R$400'}
                    priceNew={'R$59,99'}
                />

                                <Product

                    hasDiscount={true}
                    valueDiscount={'20% OFF'}
                    imageUrl={'../../src/assets/tenis.png'}
                    categoryValue={'Tênis'}
                    titleValue={'K-Swiss V8 - Masculino'}
                    priceOld={'R$400'}
                    priceNew={'R$59,99'}
                />

                                <Product

                    hasDiscount={true}
                    valueDiscount={'20% OFF'}
                    imageUrl={'../../src/assets/tenis.png'}
                    categoryValue={'Tênis'}
                    titleValue={'K-Swiss V8 - Masculino'}
                    priceOld={'R$400'}
                    priceNew={'R$59,99'}
                />

                                <Product

                    hasDiscount={true}
                    valueDiscount={'20% OFF'}
                    imageUrl={'../../src/assets/tenis.png'}
                    categoryValue={'Tênis'}
                    titleValue={'K-Swiss V8 - Masculino'}
                    priceOld={'R$400'}
                    priceNew={'R$59,99'}
                />
            </div>

        </>
    );
};