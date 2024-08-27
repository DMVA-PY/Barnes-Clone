'use client'
import React, { useState } from 'react';
import Image from 'next/image';

const Product = () => {
  const [hover, setHover] = useState(false);

  return (
    <div className="max-w-full mt-4 ">

        {/* Product */}
        <div 
            className="relative overflow-hidden bg-white shadow-lg"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            {/* Red Tag */}
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-red-600 text-white text-xs font-bold px-2 py-1 z-10">
            -25% OFF
            </div>

            {/* Product Image */}
            <div className="w-full h-[500px] overflow-hidden relative">
            <Image
                src={hover ? "/green_hoodie.webp" : "/green_hoodie2.webp"}
                alt="Hoodie Automobile Club Vintage Blue"
                layout="fill"
                objectFit="cover"
                objectPosition="center" // Centers the image within the container
                className={`transform transition-transform duration-500 ease-in-out ${hover ? 'scale-110' : 'scale-100'}`}
            />
            </div>
        </div>
        
        {/* Product Info */}
        <div className="mt-3">
            <h2 className="text-md font-semibold text-gray-600">Hoodie Automobile Club Vintage Blue</h2>
            <div className="flex items-center space-x-2">
            <span className="text-md font-normal text-gray-500">$74.500,00</span>
            <span className="text-xs text-gray-400 line-through">$93.500,00</span>
            </div>
            <p className="text-xs text-gray-500">6 x $12.416,67 sin interés</p>
            <button className="mt-2 w-full text-gray-500 text-sm font-normal py-2 text-left underline">
            Comprar
            </button>
        </div>

    </div>
  );
};

export default Product;
