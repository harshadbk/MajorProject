import React from 'react';
import './Hero.css';
import hand2 from '../Assets/hand2.jpg';
import arrow from '../Assets/arrow.jpg';
import heroimg from '../Assets/heroimg.jpg';

const Hero = () => {
    return (
        <div className='hero'>
            <div className="hero-left">
                <h2>
                    NEW ARRIVAL ONLY
                </h2>
                <div>
                    <div className="hero-hand-icon">
                        <p>New</p>
                        <img src={hand2} alt="Hand icon" />
                    </div>
                    <p>Collection</p>
                    <p>For Everyone</p>
                </div>
                <div className="hero-latest-button">
                    <button>
                        Latest Collection
                    </button>
                    <img src={arrow} alt="Arrow icon" />
                </div>
            </div>
            <div className="hero-right">
               <img src={heroimg} alt="Hero" />
            </div>
        </div>
    );
}

export default Hero;
