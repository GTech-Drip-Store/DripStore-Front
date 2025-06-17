import './FinishBuy.css';

export const FinishBuy =() => {
  return (
    <div className="checkout-container">
      <form className="checkout-form">
        <h2>Finalizar Compra</h2>

        <section>
          <h3>Informações Pessoais</h3>
          <input placeholder="Nome Completo *" />
          <input placeholder="CPF *" />
          <input placeholder="E-mail *" />
          <input placeholder="Celular *" />
        </section>

        <section>
          <h3>Informações de Entrega</h3>
          <input placeholder="Endereço *" />
          <input placeholder="Bairro *" />
          <input placeholder="Cidade *" />
          <input placeholder="CEP *" />
          <input placeholder="Complemento" />
        </section>

        <section>
          <h3>Informações de Pagamento</h3>
          <div className="payment-methods">
            <label><input type="radio" name="payment" defaultChecked /> Cartão de Crédito</label>
            <label><input type="radio" name="payment" /> Boleto Bancário</label>
          </div>
          <input placeholder="Nome do Cartão *" />
          <input placeholder="Número do Cartão *" />
          <div className="payment-details">
            <input placeholder="Data de validade do Cartão *" />
            <input placeholder="CVV *" />
          </div>
        </section>

        <div className="form-footer">
          <div className="total">
            <strong>Total</strong>
            <p className="price">R$ 219,00</p>
            <small>ou 10x de R$ 21,00 sem juros</small>
          </div>
          <button className="submit-btn">Realizar Pagamento</button>
        </div>
      </form>

      <aside className="checkout-summary">
        <h3>RESUMO</h3>
        <div className="product-summary">
          <img src="../../src/assets/miniImage.png" alt="Tênis" />
          <div>
            <p><strong>Tênis Nike Revolution 6</strong></p>
            <p>Masculino</p>
          </div>
        </div>
        <div className="summary-details">
          <p>Subtotal: <span>R$ 219,00</span></p>
          <p>Frete: <span>R$ 0,00</span></p>
          <p>Descontos: <span>R$ 0,00</span></p>
          <p className="total-line">Total: <strong>R$ 219,00</strong></p>
        </div>
        <button className="summary-pay-btn">Realizar Pagamento</button>
      </aside>
    </div>
  );
}
