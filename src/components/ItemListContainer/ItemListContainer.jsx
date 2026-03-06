import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'; 
import './ItemListContainer.css';


import { db } from '../../services/firebaseConfig'; 
import { collection, getDocs, query, where } from 'firebase/firestore';

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); 
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    const productsCollection = collection(db, "products");

    const q = categoryId 
      ? query(productsCollection, where("category", "==", categoryId)) 
      : productsCollection;

    getDocs(q)
      .then((snapshot) => {
        const productsAdapted = snapshot.docs.map((doc) => {
          const data = doc.data();
          return { id: doc.id, ...data }; 
        });
        setProducts(productsAdapted);
      })
      .catch((error) => {
        console.error("Error cargando productos de Firebase:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

  if (loading) {
    return <h2 style={{textAlign: 'center', marginTop: '50px'}}>Cargando productos...</h2>;
  }

  return (
    <div className="item-list-container">
      <h2 className="greeting-message">{greeting}</h2>
      
      {products.length === 0 && <p>No hay productos disponibles en esta categoría.</p>}

      <div className="product-list">
        {products.map(prod => (
          <div key={prod.id} className="product-card">
            <img src={prod.img} alt={prod.name} className="product-img" />
            <h3>{prod.name}</h3>
            <p className="price">S/ {prod.price}</p> 
            <Link to={`/item/${prod.id}`} className="btn-primary">
              Ver detalle
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;