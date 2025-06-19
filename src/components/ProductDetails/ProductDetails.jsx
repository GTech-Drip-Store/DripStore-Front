import './ProductDetails.css'
import { Title } from '../Title/Title';
import { Button } from '../Button/Button';
import { SizeItems } from '../SizeItems/SizeItems';
import { ColorItems } from '../ColorItems/ColorItems';
import { MiniProduct } from '../MiniProduct/MiniProduct';
import { RatingStars } from '../RatingStar/RatingStar';

export const ProductDetails = () => {
    return (
        <>
            <div className='box-caminho'>
                <a> Home / Produtos / Tênis / Nike / Tênis Nike Revolution 6 Next Nature Masculino</a>
            </div>


            <div className='box-product-details'>
                <div className='Carrosel'>
                    <img src="../../src/assets/airjordan.png" />
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
                            <RatingStars rating={4}/>
                        </div>

                        <div className='box-rating-avaliations'>
                            <div className='box-star'>
                                <p className='info-number'>4.6</p>
                                <img src="../../src/assets/icons/Star.png" alt="" />
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco.

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
                        to="/Formulario"


                    >Comprar</Button>



                </div>
            </div>


            <div className='box-selector-color-items'>
                <MiniProduct
                    margin={'0 1.749rem 0 0'}
                    backgroundColor={'#E2E3FF'}
                />
                <MiniProduct
                    margin={'0 1.749rem 0 0'}
                    backgroundColor={'#FFE8BC'}
                />
                <MiniProduct
                    margin={'0 1.749rem 0 0'}
                    backgroundColor={'#FFC0BC'}
                />
                <MiniProduct
                    margin={'0 1.749rem 0 0'}
                    backgroundColor={'#DEC699'}
                />

                <MiniProduct
                    backgroundColor={'#E8DFCF'}
                />
            </div>
        </>
    );
};