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

                <p className='label-ofertas-descric'>Lorem ipsum dolor sit amet,consectetur elit,
                    sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam , quis  nostrud exercitation ullamco laboris
                    nisi ut aliquip
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
