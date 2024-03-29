import React from 'react'

const Header = () => {
    return (
        <div>
            <div class="wrap">
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark w-100 position-absolute border-bottom border-white">
                    <div class="container-fluid">
                        <a class="navbar-brand fw-bold" href="#">Logo</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span> </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav mx-auto mb-2 mb-lg-0"> <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a> </li>
                                <li class="nav-item"> <a class="nav-link" href="#">Link</a> </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"> Dropdown </a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown"> <li><a class="dropdown-item" href="#">Action</a></li>
                                        <li><a class="dropdown-item" href="#">Another action</a></li> <li> <hr class="dropdown-divider" /> </li>
                                        <li><a class="dropdown-item" href="#">Something else here</a></li> </ul> </li> <li class="nav-item">
                                    <a class="nav-link" href="#">Link</a> </li> <li class="nav-item"> <a class="nav-link" href="#">Link</a> </li> </ul>
                            <form class="d-flex">
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    value={searchValue}
                                    onChange={handleInputChange}
                                />
                                <button disabled={disabled} onClick={handleSearchClick}>
                                    <FontAwesomeIcon icon={faSearch} />
                                </button>

                            </form>

                            <Link to="/cart"><FontAwesomeIcon icon={faShoppingCart} />
                                <small>{cartItems.length}</small>
                            </Link>

                        </div> </div> </nav> <div class="banner"></div> </div></div>
    )
}

export default Header