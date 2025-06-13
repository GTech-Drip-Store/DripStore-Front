import { Useful } from '../Useful/Useful';
import './Footer.css';

export const Footer = () => {
    return (

      <div id="box-footer">
 <div className="logo-footer">
  <div className="logo-text">
    <img src="/logo-white.svg" alt="Drip Store Logo" className="logo-icon" />
    <h1>Drip Store</h1>
  </div>
  <p>Nos siga nas nossas redes e acompanhe nossos projetos</p>
  <div className="redes-sociais">
    <img src="/facebook.svg" alt="Facebook" />
    <img src="/instagram.svg" alt="Instagram" />
    <img src="/twitter.svg" alt="Twitter" />
  </div>
</div>



  <div className="informacoes">
    <p id="titulo-informacao">Informação</p>
        <Useful value={'Segurança'} color={'white'}> </Useful>
    <Useful value={'Wishlist'} color={'white'}></Useful>
    <Useful value={'Blog'} color={'white'}></Useful>
    <Useful value={"Trabalhe Conosco"} color={'white'}></Useful>
    <Useful value={'Meus pedidos'} color={'white'}></Useful>
  </div>


  <div className="categorias">
    <p id="titulo-categoria">Categorias</p>
    <Useful value={'Camisetas'} color={'white'}></Useful>
    <Useful value={'Bonés'} color={'white'}></Useful>
    <Useful value={'Headphones'} color={'white'}></Useful>
    <Useful value={'Tênis'} color={'white'}></Useful>
  </div>

  <div className="contatos">
    <p id="titulo-contato">Contato</p>
    <Useful value={'Av. Santos Dumond, 1510-1'} color={'white'}></Useful>
    <Useful value={'andar - Aldeota, Fortaleza - CE'} color={'white'}></Useful>
    <Useful value={'60150-161'} color={'white'}></Useful>
    <Useful value={'(85) 3051-3411'} color={'white'}></Useful>
  </div>

</div>

    );
} 