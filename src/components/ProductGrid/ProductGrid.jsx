import { Title } from '../Title/Title';
import { Useful } from '../Useful/Useful';
import { Product } from './Product';
import './ProductGrid.css';

export const ProductGrid = () => {
    return (
        <>
            <div className='box-title'>
                <Title>
                    Produtos em destaque
                </Title>

                <div className='link-content'>
                    <Useful
                        value={'Ver todos'}
                        color={'#C92071'}
                    ></Useful>

                    <img src='../../src/assets/icons/IconArrow.png' />
                </div>
            </div>

            <div className='box-grid-items'>
                <div className='items-top'>
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
                        valueDiscount={'50% OFF'}
                        imageUrl={'../../src/assets/supremeClothe.png'}
                        categoryValue={'Camisas'}
                        titleValue={'Oversized Supreme'}
                        priceOld={'R$129,99'}
                        priceNew={'R$99,99'}
                    />
                    <Product
                        hasDiscount={true}
                        valueDiscount={'30% OFF'}
                        imageUrl={'../../src/assets/orangeHeadphone.png'}
                        categoryValue={'Fones de ouvido'}
                        titleValue={'Headphone V1'}
                        priceOld={'R$80'}
                        priceNew={'R$49,99'}
                    />
                    <Product
                        imageUrl={'../../src/assets/blackCap.png'}
                        categoryValue={'Chapéus'}
                        titleValue={'Boné Nike Night Cap'}
                        priceOld={'R$180,45'}
                        priceNew={'R$99,99'}
                    />
                </div>

                <div className='items-bottom'>
                    <Product
                        imageUrl={'../../src/assets/airjordan.png'}
                        categoryValue={'Tênis'}
                        titleValue={'Airjordan - Masculino'}
                        priceOld={'R$400'}
                        priceNew={'R$59,99'}
                    />
                    <Product
                        imageUrl={'../../src/assets/supremeHoodie.png'}
                        categoryValue={'Camisas'}
                        titleValue={'Moletom Supreme'}
                        priceOld={'R$129,99'}
                        priceNew={'R$99,99'}
                    />
                    <Product
                        imageUrl={'../../src/assets/blueHeadphone.png'}
                        categoryValue={'Fones de ouvido'}
                        titleValue={'Headphone wireless V2'}
                        priceOld={'R$80'}
                        priceNew={'R$49,99'}
                    />
                    <Product
                        imageUrl={'../../src/assets/redCap.png'}
                        categoryValue={'Chapéus'}
                        titleValue={'Boné Nike Full Cap Red'}
                        priceOld={'R$180,45'}
                        priceNew={'R$99,99'}
                    />
                </div>
            </div>

        </>
    );
};