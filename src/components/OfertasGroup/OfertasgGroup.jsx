import { Button } from '../Button/Button';
import './OfertasGroup.css';

export const OfertasGroup = () => {
    return (
        <div className='box-ofertas'>
            <div className='box-ofertas-image'>
            <div className="eclips">

                <img src="../../src/assets/jordan-ofertas.png" alt="" />
            </div>

            </div>

            <div className='box-ofertas-content'>
                <p className='label-ofertas'>ofertas especiais</p>
                <h2 className='c'>Air jordan edição de colecionador</h2>

                <p className='label-ofertas-descricao'>
                    Edição de colecionador do Nike Dunk High com combinação exclusiva de preto, bege e amarelo vibrante.
                    Design premium com materiais de alta qualidade e detalhes únicos.
                    Ideal para sneakerheads que valorizam estilo e exclusividade
                </p>

                <Button
                width={'12.5rem'}
                height={'2.5rem'}
                margin={'3rem 0 0 0'}
                >Ver Ofertas</Button>
            </div>
            

            </div>

        
        
    );
};
