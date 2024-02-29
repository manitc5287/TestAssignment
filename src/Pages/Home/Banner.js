import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from "../../assets/img/bannerimage.jpg";
import './home.css'; // Import your CSS file

const Banner = () => {
    const [searchValue, setSearchValue] = useState('');

    const handleSearchChange = (e) => {
        setSearchValue(e.target.value);
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className="home__banner">
            <div className='container'>
                <div className='row align-items-center'>
                   
                    <div className='col-lg-12 col-md-12 col-sm-12'>
                        <div className='banner__image'>
                            <Slider {...settings}>
                                <div>
                                    <img src={Image} className='img-fluid' alt="Banner Image" />
                                </div>
                                <div>
                                    <img src={Image} className='img-fluid' alt="Banner Image" />
                                </div>
                                <div>
                                    <img src={Image} className='img-fluid' alt="Banner Image" />
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
