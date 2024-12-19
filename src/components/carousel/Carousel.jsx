import { useState } from 'react';
import './Carousel.css'

function Carousel({ content }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = content.images;
    const length = images.length;

    const nextSlide = () => {
        setCurrentIndex(currentIndex === length - 1 ? 0 : currentIndex + 1);
    };

    const prevSlide = () => {
        setCurrentIndex(currentIndex === 0 ? length - 1 : currentIndex - 1);
    };

    return (
        <div className="carousel-container">
            <div className="carousel-navigation">

                <div className="carousel-info">
                    <p>{images[currentIndex].description}</p>
                    <div className="carousel-counter">
                        {currentIndex + 1} / {length}
                    </div>
                </div>

                <button
                    onClick={nextSlide}
                    className="carousel-next-button"
                >
                    next
                </button>
            </div>

            <div className="carousel-image-container">
                <button
                    className="carousel-invisible-prev"
                    onClick={prevSlide}
                    aria-label="Previous image"
                />
                <button 
                    className="carousel-invisible-next"
                    onClick={nextSlide}
                    aria-label="Next image"
                />
        
                <img
                    src={images[currentIndex].url}
                    alt={images[currentIndex].description}
                />
            </div>

        </div>
    );
}

export default Carousel;