import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);

  return (
    <div className="d-flex align-items-center" style={{ cursor: 'pointer' }}>
      <i className="bi bi-cart3" style={{ fontSize: '1.5rem', color: 'white' }}></i>
      
      {}
      {totalQuantity > 0 && (
        <span className="badge rounded-pill bg-danger" style={{ marginLeft: '5px' }}>
          {totalQuantity}
        </span>
      )}
    </div>
  );
};

export default CartWidget;