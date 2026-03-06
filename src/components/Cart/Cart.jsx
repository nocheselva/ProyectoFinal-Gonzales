import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./Cart.css"; // <--- IMPORTANTE: Conecta tu estilo aquí

const Cart = () => {
    const { cart, clearCart, removeItem, total } = useContext(CartContext);

    if (cart.length === 0) {
        return (
            <div className="container text-center mt-5 cart-container">
                <h1 className="display-5">El carrito de Emma está vacío 🐾</h1>
                <p className="empty-cart-msg">¿Aún no has elegido nada para tu peludito?</p>
                <Link to="/" className="btn btn-primary mt-3">Volver a la tienda</Link>
            </div>
        );
    }

    return (
        <div className="container mt-5 cart-container">
            <h1 className="mb-4">Resumen de tu compra</h1>
            <div className="list-group">
                {cart.map((item) => (
                    <div key={item.id} className="list-group-item d-flex justify-content-between align-items-center p-3 mb-2 cart-item-card shadow-sm">
                        <div>
                            <h5 className="mb-1">{item.name}</h5>
                            <small className="text-muted d-block">Cantidad: {item.quantity}</small>
                            <p className="mb-0 fw-bold">Total producto: S/ {item.price * item.quantity}</p>
                        </div>
                        <button className="btn btn-outline-danger btn-sm" onClick={() => removeItem(item.id)}>
                            Eliminar
                        </button>
                    </div>
                ))}
            </div>

            <div className="mt-4 text-end total-section shadow-sm">
                <h2 className="mb-3">Total a pagar: <span className="text-success">S/ {total}</span></h2>
                <button className="btn btn-secondary me-3" onClick={clearCart}>Vaciar Carrito</button>
                <Link to="/checkout" className="btn btn-success px-4 fw-bold">Finalizar Compra</Link>
            </div>
        </div>
    );
};

export default Cart;