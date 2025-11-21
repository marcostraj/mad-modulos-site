import { ShoppingCart } from "lucide-react";
import { useCart } from "./cardContext";
import "./floatingCartButton.css";

export default function FloatingCartButton() {
  const { cart, toggleCart } = useCart();

  const totalItems = cart.reduce((s, i) => s + (i.quantidade || 1), 0);

  if (cart.length === 0) return null; 

  return (
    <button className="floating-cart-btn" onClick={toggleCart}>
      <ShoppingCart size={20} />
      <span className="floating-cart-badge">{totalItems}</span>
    </button>
  );
}
