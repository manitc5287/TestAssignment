import React, { useState, useEffect } from 'react';
import './product.css';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartActions';
import { ToastContainer, toast } from 'react-toastify';
const Product = () => {
    const [products, setProducts] = useState();
    const [buttonValue, setButtonValue] = useState("");


    const dispatch = useDispatch();

    const handleAddToCart = (product, productTitle) => {
        dispatch(addToCart(product));
        toast.success(`${productTitle} added to cart`);
      
    };

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://dummyjson.com/products');
                if (!response.ok) {
                    throw new Error('Failed to fetch products');
                }
                const data = await response.json();
                setProducts(data.products);

            } catch (error) {
                toast.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

  
    return (
        <div className='container'>
         <ToastContainer />
            <div className='row mb-2'>
               <div className='filter__btn'>
                   <button className={buttonValue === "" ? 'active' : ''} onClick={()=>setButtonValue('')}>All Products</button>
                   <button className={buttonValue === "smartphones" ? 'active' : ''} onClick={()=>setButtonValue('smartphones')}>SmartPhones</button>
                   <button className={buttonValue === "laptops" ? 'active' : ''} onClick={()=>setButtonValue('laptops')}>Laptops</button>
                   <button className={buttonValue === "fragrances" ? 'active' : ''} onClick={()=>setButtonValue('fragrances')}>Perfumes</button>
                   <button className={buttonValue === "skincare" ? 'active' : ''} onClick={()=>setButtonValue('skincare')}>Skincare</button>
                   <button className={buttonValue === "groceries" ? 'active' : ''} onClick={()=>setButtonValue('groceries')}>Groceries</button>
               </div>
            </div>
            <div className='row'>
                {products ? products.filter((items)=>(buttonValue==="" ? items.category : items.category===buttonValue)).map((product) => (
                    <div key={product.id} className=' col-md-3 col-sm-6'>
                        <div className='product__card'>
                            <img src={product.thumbnail} alt={product.title} className='product__image' />
                            <div className='product__details'>
                                <h2 className='product__name'>{product.title}</h2>
                                <p className='product__description'>{product.description}</p>
                                <p className='product__price'>${product.price}</p>
                               <div className='fw-semibold d-flex justify-content-between mb-2'>
                               <small>{product.rating} / 5</small> <small>Available Unit : {product.stock}</small>
                               </div>
                            </div>
                            <button
                                className='product__button'
                                onClick={() => handleAddToCart(product , product.title )}
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                )) : null}
            </div>
        </div>
    );
};

export default Product;
