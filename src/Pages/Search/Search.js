import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartActions';
import { ToastContainer, toast } from 'react-toastify';

const Search = () => {
    const [searchproduct, setSearchproduct] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        fetchProduct();
    }, []);

    const handleAddToCart = (product, productTitle) => {
        dispatch(addToCart(product));
        toast.success(`${productTitle} added to cart`);
      
    };

    const fetchProduct = async () => {
        try {
            const searchValue = localStorage.getItem('searchQuery');
            const response = await fetch(`https://dummyjson.com/products/search?q=${searchValue}`);
            if (!response.ok) {
                throw new Error('Failed to fetch product');
            }
            const data = await response.json();
            setSearchproduct(data.products);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    return (
        <>
            <Header />
            <div className="container mb-5">
                <h2 className=' text-center mt-3'>Search Results</h2>
                <div className="row mt-3">
                    {searchproduct.map(product => (
                        <div key={product.id} className="col-md-3 col-sm-6">
                            <div className="product__card">
                                <img src={product.thumbnail} alt={product.title} className="product__image" />
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
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Search;
