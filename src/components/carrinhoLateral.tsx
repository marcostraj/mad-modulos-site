import { useCart } from "./cardContext";
import { X, Trash2 } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import "./carrinhoLateral.css";

export default function CarrinhoLateral() {
  const { cart, removeFromCart, updateQuantity, clearCart, isCartOpen, toggleCart } = useCart();

  const total = cart.reduce((s, i) => s + i.preco * (i.quantidade || 1), 0);

  const whatsappNumber = "5511981217300";

  const message = encodeURIComponent(
    `Olá! Gostaria de comprar:${cart.map(i => ` ${i.nome} (Qtd: ${i.quantidade}) - R$ ${i.preco}`).join(" ")} Total: R$ ${total}`
  );

  return (
    <div className={`cart-overlay ${isCartOpen ? "open" : ""}`} aria-hidden={!isCartOpen}>
      <aside className="cart-panel" role="dialog" aria-label="Carrinho">
        <header className="cart-header">  
          <h3><ShoppingCart></ShoppingCart>Carrinho</h3>
          <div>
            <button className="cart-clear" onClick={clearCart}>Limpar</button>
            <button className="cart-close" onClick={toggleCart}><X size={18} /></button>
          </div>
        </header>

        <div className="cart-body">
          {cart.length === 0 ? (
            <div className="cart-empty">
              <img src="cart-icon.svg" alt="" />
              <p>Carrinho vazio</p>
              <small>Adicione módulos ao carrinho para finalizar a compra.</small>
            </div>
          ) : (
            cart.map(item => (
              
              <div key={item.id} className="cart-item">
                <img className="cart-image" src={item.imagem} alt={item.nome} />
                <div className="cart-item-container">
                  <div className="cart-item-info">
                    <strong>{item.nome}</strong>
                    <span className="muted">{item.descricao}</span>
                    <span className="span-preco">R$ {item.preco}</span>
                  </div>
                  <div className="cart-item-actions">
                    <div className="number-input">
                      <button
                        className="arrow up"
                        onClick={() => updateQuantity(item.id, (item.quantidade || 1) + 1)}
                      ><img src="arrow2-cart.png" alt="" /></button>

                      <input
                        type="number"
                        min={1}
                        value={item.quantidade || 1}
                        onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                      />

                      <button
                        className="arrow down"
                        onClick={() =>
                          updateQuantity(item.id, Math.max(1, (item.quantidade || 1) - 1))
                        }
                      ><img src="arrow-cart.png" alt="" /></button>
                    </div>

                    <button onClick={() => removeFromCart(item.id)} className="remove-btn">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <footer className="cart-footer">
            <div className="cart-total">
              <span>Total</span>
              <strong>R$ {total}</strong>
            </div>
            
            <a
              
              className="cart-cta"
              href={`https://wa.me/${whatsappNumber}?text=${message}`}
              target="_blank"
              rel="noreferrer"
              onClick={toggleCart}
            ><ShoppingCart size={18} />
              Finalizar compra
            </a>
          </footer>
        )}
      </aside>
    </div>
  );
}
