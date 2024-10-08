'use client'
import { useEffect, useState } from 'react';
import Image from 'next/image';

const images = {
  small: ['/main_smart1.webp', '/main_smart1.webp', '/main_smart1.webp'],
  medium: ['/main_slide2.webp','/main_1.webp','/main_slide2.webp','/main_1.webp']
};

const ImageSlider = () => {
  const [visible, setVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageSize, setImageSize] = useState<'small' | 'medium'>('small');
  const [imageLoaded, setImageLoaded] = useState(false);

  /* resize sm and md */  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setImageSize('medium');
      } else {
        setImageSize('small');
      }
    };
    
    if (typeof window !== 'undefined') {
      handleResize(); // Set initial image size
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  /* 5s to slide image */
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(prevIndex => {
        const imagesArray = images[imageSize];
        return (prevIndex + 1) % imagesArray.length;
      });
    }, 5000);

    return () => clearInterval(intervalId);
  }, [imageSize]);

  /* next img */
  const handleNext = () => {
    setCurrentIndex(prevIndex => {
      const imagesArray = images[imageSize];
      return (prevIndex + 1) % imagesArray.length;
    });
  };

  /* prev img */
  const handlePrev = () => {
    setCurrentIndex(prevIndex => {
      const imagesArray = images[imageSize];
      return (prevIndex - 1 + imagesArray.length) % imagesArray.length;
    });
  };

  const imageArray = images[imageSize];

  return (
    <div className="relative w-full h-full">

      <div className={`relative w-full transition-opacity duration-2000 ${visible ? 'opacity-100' : 'opacity-0'}`}>

        {/* Overlay to hide content before image loads */}
        <div>
          <Image
            src={imageArray[currentIndex]}
            alt="Slider Image"
            width={10000}
            height={100}
            objectFit="cover"
            className="transition-all duration-500 ease-in-out"
            onLoad={() => setVisible(true)} // Make the component visible when the image is fully loaded
          />
        </div>

        {/* buttons */}
        <div className="absolute top-4 right-4 flex space-x-4">

          <button
            className="w-8 h-8  text-white text-4xl flex items-center justify-center  transition"
            onClick={handlePrev}
          >
            &#8249;
          </button>

          <button
            className="w-8 h-8 text-white text-4xl flex items-center justify-center transition"
            onClick={handleNext}
          >
            &#8250;
          </button>

        </div>
          
      </div>

    </div>
  );
};

export default ImageSlider;
