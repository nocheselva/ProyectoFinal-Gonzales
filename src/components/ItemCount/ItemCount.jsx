import { useState } from 'react';
import './ItemCount.css';

const ItemCount = ({ stock, initial, onAdd }) => {
    // Definimos el estado de la cantidad (empieza en 1)
    const [quantity, setQuantity] = useState(initial);

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1);
        }
    };

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div className="counter-container">
            <div className="controls">
                {/* Botón para restar */}
                <button className="btn-control" onClick={decrement}>-</button>
                
                {/* Cantidad actual */}
                <h4 className="number">{quantity}</h4>
                
                {/* Botón para sumar */}
                <button className="btn-control" onClick={increment}>+</button>
            </div>
            
            {/* Botón de acción: ejecuta la función onAdd que viene del padre */}
            <button 
                className="btn-add-cart" 
                onClick={() => onAdd(quantity)}
                disabled={!stock}
            >
                Agregar al carrito
            </button>
        </div>
    );
};

export default ItemCount;