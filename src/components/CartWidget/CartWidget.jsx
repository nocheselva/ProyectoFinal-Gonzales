import { useContext } from 'react';
import { CartContext } from '../../context/CartContext'; // Importamos el contexto

const CartWidget = () => {
  // Sacamos totalQuantity del contexto
  const { totalQuantity } = useContext(CartContext);

  return (
    <div className="d-flex align-items-center" style={{ cursor: 'pointer' }}>
      <i className="bi bi-cart3" style={{ fontSize: '1.5rem', color: 'white' }}></i>
      
      {/* Solo mostramos el número si hay más de 0 productos */}
      {totalQuantity > 0 && (
        <span className="badge rounded-pill bg-danger" style={{ marginLeft: '5px' }}>
          {totalQuantity}
        </span>
      )}
    </div>
  );
};

export default CartWidget;