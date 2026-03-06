import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { db } from "../../services/firebaseConfig";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const Checkout = () => {
    const [orderId, setOrderId] = useState("");
    const [loading, setLoading] = useState(false);
    const { cart, total, clearCart } = useContext(CartContext);

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: ""
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

      
        const order = {
            buyer: formData,
            items: cart,
            total: total,
            date: serverTimestamp()
        };

        try {
            const docRef = await addDoc(collection(db, "orders"), order);
            setOrderId(docRef.id);
            clearCart(); 
        } catch (error) {
            console.error("Error al generar la orden:", error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) return <h2>Generando tu orden... </h2>;

    if (orderId) {
        return (
            <div className="container mt-5 text-center">
                <h2>¡Gracias por tu compra, {formData.name}!</h2>
                <p>Tu número de seguimiento es: <strong>{orderId}</strong></p>
                <p>Pronto nos comunicaremos contigo.</p>
            </div>
        );
    }

    return (
        <div className="container mt-5">
            <h2>Finalizar Compra</h2>
            <form onSubmit={handleFormSubmit} className="mt-4">
                <div className="mb-3">
                    <label className="form-label">Nombre Completo</label>
                    <input type="text" name="name" className="form-control" onChange={handleInputChange} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Teléfono</label>
                    <input type="number" name="phone" className="form-control" onChange={handleInputChange} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" name="email" className="form-control" onChange={handleInputChange} required />
                </div>
                <button type="submit" className="btn btn-primary">Confirmar Compra</button>
            </form>
        </div>
    );
};

export default Checkout;