import './Footer.css';

export const Footer = () => {
    return (

      <div id="box-footer">
  <div className="logo-footer">
    <h1>Drip Store</h1>
    <p>Nos siga nas nossas redes e acompanhe nossos projetos</p>
    <div className="redes-sociais">
      <img src="/facebook.svg" alt="Facebook" />
      <img src="/instagram.svg" alt="Instagram" />
      <img src="/twitter.svg" alt="Twitter" />
    </div>
  </div>
  <div className="informacoes">
    <p id="titulo-informacao">Informação</p>
    <p>Segurança</p>
    <p>Wishlist</p>
    <p>Blog</p>
    <p>Trabalhe Conosco</p>
    <p>Meus pedidos</p>
  </div>

  <div className="categorias">
    <p id="titulo-categoria">Categorias</p>
    <p>Camisetas</p>
    <p>Calças</p>
    <p>Bonés</p>
    <p>Headphones</p>
    <p>Tênis</p>
  </div>

  <div className="contatos">
    <p id="titulo-contato">Contato</p>
    <p>Av. Santos Dumond, 1510-1</p>
    <p>andar - Aldeota, Fortaleza - CE</p>
    <p>60150-161</p>
    <p>(85) 3051-3411</p>
  </div>
</div>

    );
} 