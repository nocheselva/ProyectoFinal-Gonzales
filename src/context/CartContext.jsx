import { createContext, useState } from "react";

// 1. Creamos el contexto
export const CartContext = createContext({
    cart: []
});

// 2. Definimos el Proveedor (Provider) que envolverá a toda la App
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    // Función para agregar al carrito evitando duplicados
    const addItem = (item, quantity) => {
        if (!isInCart(item.id)) {
            setCart(prev => [...prev, { ...item, quantity }]);
        } else {
            console.error("El producto ya fue agregado");
        }
    };

    // Función para remover un solo producto
    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId);
        setCart(cartUpdated);
    };

    // Función para vaciar todo el carrito
    const clearCart = () => {
        setCart([]);
    };

    // Función auxiliar para saber si el producto ya está en el carrito
    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId);
    };

    // Cálculo de la cantidad total de productos (para el numerito del CartWidget)
    const totalQuantity = cart.reduce((total, prod) => total + prod.quantity, 0);

    // Cálculo del precio total de la compra (S/)
    const total = cart.reduce((total, prod) => total + (prod.price * prod.quantity), 0);

    return (
        // 3. Pasamos todos los valores y funciones al Provider
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, totalQuantity, total }}>
            {children}
        </CartContext.Provider>
    );
};