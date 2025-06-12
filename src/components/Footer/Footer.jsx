import './Footer.css';

export const Footer = () => {
    return (

        <div id='box-footer'>
            <div className='logo-footer'>
                <img src={'../../../public/logo-white.svg'} />
                <span> Drip Store</span>
                <p id='teste'>Nos siga nas nossas redes e acompanhe nossos projetos</p>
                <p id='teste'>Todos os direitos reservados a Digital College &copy;</p>


                <img src="../../../public/facebook.svg" />
                <img src="../../../public/instagram.svg" />
                <img src='../../../public/twitter.svg' />


            <div className='informacoes'>
                <p id='titulo-informacao'>Informação</p>
                <p>Segurança</p>
                <p>Wishlist</p>
                <p>blog</p>
                <p>Trabalhe Conosco</p>
                <p>Meus pedidos</p>
            </div>

            <div className='categorias'>
                <p id='titulo-categoria'>Categorias</p>
                <p>Camisetas</p>
                <p>Calças</p>
                <p>Bonés</p>
                <p>Headphones</p>
                <p>Tênis</p>
            </div>

            <div className='contatos'>
                <p id='titulo-contato'>Contato</p>
                <p>Av.Santos Dumond,1510-1</p>
                <p>andar-Aldeota,Fortaleza-</p>
                <p>CE,60150-161</p>
                <p>(85) 3051-3411</p>
            </div>
            
            </div>

        </div>
    );
} 