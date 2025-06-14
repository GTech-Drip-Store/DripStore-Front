import './ProductDetails.css'
import { Title } from '../Title/Title';

export const ProductDetails = () => {
    return (
        <>
            <div className='box-caminho'>
                <a> Home / Produtos / Tênis / Nike / Tênis Nike Revolution 6 Next Nature Masculino</a>
            </div>


            <div className='box-product-details'>
                <div className='Carrosel'>

                </div>

                <div className='box-product-information'>
                    <Title
                        width={'27.5rem'}
                        height={'4.5rem'}
                        fontSize={'2rem'}
                        fontWeight={'700'}
                        color={'#1F1F1F'}
                        lineHeight={'2.25rem'}
                        letterSpacing={'0.063rem'}
                    >Tênis Nike Revolution 6 Next Nature Masculino</Title>

                    <p className='info-aditional'>Casual | Nike | REF:38416711</p>

                    <div className='box-rating'>
                        <div className='box-star-rating'>

                        </div>

                        <div className='box-rating-avaliations'>
                            <div className='box-star'>
                                
                            </div>

                            <p className='info-avaliations'>(90 avaliações )</p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};