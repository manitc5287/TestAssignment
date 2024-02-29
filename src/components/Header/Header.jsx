import React, { useEffect, useState } from 'react';
import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = () => {

    const navigate = useNavigate();

    const [isScrolled, setIsScrolled] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [disabled, setDisabled] = useState(true);

    const cartItems = useSelector(state => state.cart.cartItems);

    const handleInputChange = (event) => {
        setSearchValue(event.target.value);
        setDisabled(false);
    };

    const handleSearchClick = () => {
        localStorage.setItem('searchQuery', searchValue)
        window.location.assign('/search');
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            setIsScrolled(scrollTop > 100);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`navbar-fixed-top ${isScrolled ? 'scrolled' : ''}`}>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark w-100 border-bottom border-white">
                <div className="container-fluid header__logo">
                    <Link to ="/" className="navbar-brand  fw-bold" >LOGO</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span> </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        </ul>
                        <div className="d-flex header__search">
                            <input
                                type="text"
                                placeholder="Search..."
                                value={searchValue}
                                onChange={handleInputChange}
                            />
                            <button disabled={disabled} onClick={handleSearchClick}>
                                <FontAwesomeIcon icon={faSearch} />
                            </button>
                        </div>
                        <Link to="/cart"><FontAwesomeIcon icon={faShoppingCart} />
                            <small>{cartItems.length}</small>
                        </Link>
                    </div>
                </div>
            </nav>
            <div className="banner"></div>
        </div>
    );
}

export default Header;
