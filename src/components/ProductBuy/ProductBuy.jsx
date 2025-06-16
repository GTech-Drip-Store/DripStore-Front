import './ProductBuy.css';

export const ProductBuy = ()  =>{
  return (
    <div className="success-page">
      <div className="success-box">
        <h2>🎉 Compra Realizada com sucesso!</h2>

        <div className="section">
          <h3>Informações Pessoais</h3>
          <p><strong>Nome:</strong> Francisco Antônio Pereira</p>
          <p><strong>CPF:</strong> 123.456.913-35</p>
          <p><strong>Email:</strong> francisco@gmail.com</p>
          <p><strong>Celular:</strong> (85) 5555-5555</p>
        </div>

        <div className="section">
          <h3>Informações de Entrega</h3>
          <p><strong>Endereço:</strong> Rua João Pessoa, 333</p>
          <p><strong>Bairro:</strong> Centro</p>
          <p><strong>Cidade:</strong> Fortaleza, Ceará</p>
          <p><strong>CEP:</strong> 43388-00</p>
        </div>

        <div className="section">
          <h3>Informações de Pagamento</h3>
          <p><strong>Titular do Cartão:</strong> FRANCISCO A P</p>
          <p><strong>Final:</strong> **** **** **** 2020</p>
        </div>

        <div className="section">
          <h3>Resumo da compra</h3>
          <div className="product-info">
            <img
              src="../../src/assets/miniImage.png"
              alt="Tênis"
              className="product-img"
            />
            <div>
              <p><strong>Tênis Nike Revolution 6 Next Nature</strong></p>
              <p>Masculino</p>
            </div>
          </div>
          <div className="total">
            <p><strong>Total:</strong></p>
            <p className="price">R$ 219,00</p>
            <small>ou 10x de R$ 21,00 sem juros</small>
          </div>
        </div>

        <div className="actions">
          <button className="print-button">Imprimir Recibo</button>
          <button className="home-button">Voltar para Home</button>
        </div>
      </div>
    </div>
  );
}
