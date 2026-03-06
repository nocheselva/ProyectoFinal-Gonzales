import { useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetailContainer.css';


import { db } from '../../services/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import { CartContext } from '../../context/CartContext';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [quantityAdded, setQuantityAdded] = useState(0);

    const { itemId } = useParams();
    const { addItem } = useContext(CartContext); 

    useEffect(() => {
        setLoading(true);

        
        const docRef = doc(db, "products", itemId);

        getDoc(docRef)
            .then(snapshot => {
                if (snapshot.exists()) {
                    const data = snapshot.data();
                    const productAdapted = { id: snapshot.id, ...data };
                    setProduct(productAdapted);
                } else {
                    console.error("No existe el producto en Firebase");
                }
            })
            .catch(error => console.error("Error al obtener detalle:", error))
            .finally(() => setLoading(false));
    }, [itemId]);

   
    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity);
        
        const itemToAdd = {
            id: product.id,
            name: product.name,
            price: product.price,
            img: product.img
        };

        addItem(itemToAdd, quantity); 
    };

    if (loading) return <h2 style={{textAlign: 'center', marginTop: '50px'}}>Cargando detalle del producto...</h2>;
    if (!product) return <h2 style={{textAlign: 'center'}}>Producto no encontrado</h2>;

    return (
        <div className="item-detail-container">
            <div className="item-detail-card">
                <img src={product.img} alt={product.name} className="item-detail-img" />
                <div className="item-detail-info">
                    <h2>{product.name}</h2>
                    <p className="description">{product.description}</p>
                    <p className="price-detail">S/ {product.price}</p>
                    <p className="stock">Stock disponible: {product.stock}</p>
                    
                    {}
                    {quantityAdded > 0 ? (
                        <Link to="/cart" className="btn-primary" style={{backgroundColor: '#28a745', display: 'block', textAlign: 'center'}}>
                            Ir al carrito de Emma 🐾
                        </Link>
                    ) : (
                        <ItemCount 
                            stock={product.stock} 
                            initial={1} 
                            onAdd={handleOnAdd} 
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default ItemDetailContainer;