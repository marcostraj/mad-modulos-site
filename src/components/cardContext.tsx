import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

export interface Modulo {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  imagem: string;
  dimensoes: {
    altura: string;
    profundidade: string;
    largura: string;
  };
  quantidade?: number;
}

interface CartContextType {
  cart: Modulo[];
  addToCart: (item: Modulo) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, qty: number) => void;
  clearCart: () => void;
  toggleCart: () => void;
  isCartOpen: boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Modulo[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (item: Modulo) => {
    setCart(prev => {
      const exists = prev.find(p => p.id === item.id);
      if (exists) {
        return prev.map(p => 
          p.id === item.id 
            ? { ...p, quantidade: (p.quantidade || 1) + (item.quantidade || 1) }
            : p
        );
      }

      return [...prev, { ...item, quantidade: item.quantidade || 1 }];
    });
  };

  const removeFromCart = (id: number) => 
    setCart(prev => prev.filter(i => i.id !== id));

  const updateQuantity = (id: number, qty: number) => {
    if (qty <= 0) {
      removeFromCart(id);
      return;
    }
    
    setCart(prev =>
      prev.map(i => 
        i.id === id
          ? { ...i, quantidade: qty }
          : i
      )
    );
  };

  const clearCart = () => setCart([]);

  const toggleCart = () => setIsCartOpen(v => !v);

  return (
    <CartContext.Provider 
      value={{ 
        cart, 
        addToCart, 
        removeFromCart, 
        updateQuantity, 
        clearCart, 
        toggleCart, 
        isCartOpen 
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const c = useContext(CartContext);
  if (!c) throw new Error("useCart must be used inside CartProvider");
  return c;
};
