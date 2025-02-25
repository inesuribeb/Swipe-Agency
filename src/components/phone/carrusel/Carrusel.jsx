

import { useState, useRef, useEffect } from 'react';
import './Carrusel.css';
import { Link } from 'react-router-dom';


function Carrusel({ content, className, withLinks }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);
    const carruselRef = useRef(null);
    const images = content.images;
    const length = images.length;

    const minSwipeDistance = 50;

    const onTouchStart = (e) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;

        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe) {
            nextSlide();
        }
        if (isRightSwipe) {
            prevSlide();
        }
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => {
            if (prevIndex === length - 1) {
                return 0;
            }
            return prevIndex + 1;
        });
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => {
            if (prevIndex === 0) {
                return length - 1;
            }
            return prevIndex - 1;
        });
    };

    return (
        <div className={`carrusel-container-mobile ${className}`}>

            <div
                className="carrusel-track"
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
                ref={carruselRef}
                style={{
                    transform: `translateX(-${currentIndex * 80}%)`,
                }}
            >
                {images.map((image, index) => (
                   
                    <div key={index} className="carrusel-slide">
                        {withLinks ? (
                            <Link to={image.link}>
                                <p className="carrusel-description">{image.description}</p>
                                <img src={image.url} alt={image.description} />
                            </Link>
                        ) : (
                            <>
                                <img
                                    src={image.url}
                                    alt={image.description}
                                    className="carrusel-image"
                                />
                            </>
                        )}
                    </div>

                ))}
            </div>

            <div className="carrusel-info">
                <p className={images[currentIndex].textColor}>
                    {images[currentIndex].description}
                </p>
            </div>
        </div>
    );
}

export default Carrusel;

