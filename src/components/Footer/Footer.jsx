import './Footer.css';

// footer construção
export const Footer = () => {
    return(
        <footer id='footer'>
            <div className='box-footer'>
                <div className='logo-footer'>

                    <img src={'../../../public/logo-white.svg'}/>
                    <span> Drip Store</span>

                    <p>Nos siga nas nossas redes e acompanhe nossos projetos</p>
                    <p>Digital College</p>

                    <img src="../../../public/facebook.svg"/>
                    <img src="../../../public/instagram.svg"/>
                    <img src='../../../public/twitter.svg'/>
                </div>
            </div>
        </footer>
    );
} 