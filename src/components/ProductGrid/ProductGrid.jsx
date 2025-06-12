import { Title } from '../Title/Title';
import { Useful } from '../Useful/Useful';
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
                    <p>Items Acima</p>
                </div>

                <div className='items-bottom'>
                    <p>Item abaixo</p>
                </div>
            </div>

        </>
    );
};