import { Button } from '../Button/Button';
import { Title } from '../Title/Title';

export default function Slide({ title, description, image }) {
    return (
        <div className="slide-content">
            <div className="text-content">
                <h4>Melhores ofertas personalizadas</h4>

                <Title
                width={'31.875rem'}
                height={'8.25rem'}
                margin={'1.25rem 0 0 0'}
                display={'flex'}
                fontSize={'4rem'}
                color={'#1F1F1F'}
                lineHeight={'4.125rem'}
                fontWeight={'800'}
                letterSpacing={'0.063rem'}
                >{title}</Title>

                <p>{description}</p>

                <Button
                width={'13.75rem'}
                height={'3rem'}
                margin={'2.5rem 0 0 0'}
                color={'#F5F5F5'}
                backgroundColor={'#C92071'}
                >Ver Ofertas</Button>

            </div>
            <div className="image-content">

                <img src={image} alt={title} />
                
            </div>

            <div className='box-simbol'>
                <img src="../../src/assets/Ornament11.png" alt="" />
            </div>

        </div>
    );
}
