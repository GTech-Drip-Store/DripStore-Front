import './ProductDetails.css'
import { Title } from '../Title/Title';
import { Useful } from '../Useful/Useful';
import { Button } from '../Button/Button';
import { SizeItems } from '../SizeItems/SizeItems';
import { ColorItems } from '../ColorItems/ColorItems';

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
                                <p className='info-number'>4.6</p>
                                <img src="" alt="" />
                            </div>
                            <p className='info-avaliations'>(90 avaliações )</p>
                        </div>
                    </div>


                    <div className='box-price-exibition'>
                        <p className='box-simbol-price'>R$</p>
                        <p className='info-price'>
                            <span className='price-integer'>219</span>
                            <span className='price-decimal'>,00</span>
                        </p>
                        <p className='old-price'>229,00</p>
                    </div>

                    <Title
                        width={'10.125'}
                        height={'1.375'}
                        margin={'1.25rem 0 0 0'}
                        color={'#8F8F8F'}
                        fontSize={'0.875rem'}
                        lineHeight={'1.375rem'}
                        letterSpacing={'0.047rem'}
                    >Descrição do produto</Title>

                    <p className='box-product-description'>
                        Tênis Nike Air Force 1 Low branco com detalhes em vermelho, em couro premium e mesh respirável.
                        Amortecimento Nike Air na entressola para conforto o dia todo.
                        Sola de borracha vermelha com tração durável.

                    </p>

                    <div className='box-size-product'>
                        <Title
                            width={'0.625rem'}
                            height={'1.375rem'}
                            fontSize={'0.875rem'}
                        >Tamanho</Title>

                        <div className='box-size'>
                            <SizeItems />
                        </div>
                    </div>

                    <div className='box-color-product'>

                        <Title
                            width={'0.625rem'}
                            height={'1.375rem'}
                            fontSize={'0.875rem'}
                        >Cor</Title>
                        <ColorItems />
                    </div>

                    <Button
                    width={'13.75rem'}
                    height={'3rem'}
                    margin={'1.688rem 0 0 0'}
                    color={'#F5F5F5'}
                    backgroundColor={'#FFB31F'}

                    
                    >Comprar</Button>



                </div>
            </div>


            <div className='box-selector-color-items'>

            </div>
        </>
    );
};