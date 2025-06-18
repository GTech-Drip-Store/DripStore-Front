import React from "react";
import "./ManageCart.css";

export const ManageCart = () => {
  return (
    <div className="cart-page">
      <div className="cart-left">
        <h2>MEU CARRINHO</h2>

        <div className="cart-product">
          <img src="../../src/assets/smallshoe.svg" alt="Tênis" />
          <div className="product-details">
            <h4>Tênis Nike Revolution 6 Next Nature Masculino</h4>
            <p>Cor: <strong>Vermelho / Branco</strong></p>
            <p>Tamanho: <strong>42</strong></p>
            <button className="remove-btn">Remover item</button>
          </div>
          <div className="product-quantity">
            <button>-</button>
            <span>1</span>
            <button>+</button>
          </div>
          <div className="product-price">
            <span className="unit-price">R$ 219,00</span>
            <span className="total-price">R$ 219,00</span>
          </div>
        </div>

        <div className="cart-tools">
          <div className="discount-box">
            <label>Cupom de desconto</label>
            <input type="text" placeholder="Insira seu código" />
            <button>OK</button>
          </div>
          <div className="frete-box">
            <label>Calcular frete</label>
            <input type="text" placeholder="Insira seu CEP" />
            <button>OK</button>
          </div>
        </div>

        <h3>Produtos Relacionados</h3>
        <div className="related-products">
          {[...Array(4)].map((_, i) => (
            <div className="related-card" key={i}>
              {i === 0 && <span className="discount">30% OFF</span>}
              <img src="https://via.placeholder.com/140x100" alt="Tênis" />
              <p className="rel-title">Tênis</p>
              <p className="rel-name">K-Swiss V8 - Masculino</p>
              <p className="rel-price">
                <span className="old-price">R$200</span>
                <span className="new-price">R$100</span>
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="cart-summary">
        <h3>RESUMO</h3>
        <p>Subtotal: <span>R$ 219,00</span></p>
        <p>Frete: <span>R$ 0,00</span></p>
        <p>Desconto: <span>R$ 30,00</span></p>
        <h2>Total: <span className="highlight">R$ 219,00</span></h2>
        <p className="installments">ou 10x de R$ 21,00 sem juros</p>
        <button className="checkout-btn">Continuar</button>
      </div>
    </div>
  );
};

