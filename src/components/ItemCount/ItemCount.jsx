import { useState } from 'react';
import './ItemCount.css';

const ItemCount = ({ stock, initial, onAdd }) => {
    
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
                {}
                <button className="btn-control" onClick={decrement}>-</button>
                
                {}
                <h4 className="number">{quantity}</h4>
                
                {}
                <button className="btn-control" onClick={increment}>+</button>
            </div>
            
            {}
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