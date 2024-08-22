'use client'
import Link from 'next/link';
import MovingBar from "@/components/header/MovingBar";
import logo from '/home/vare/project/frelo/silence_com/clients/ecom/public/logo.webp'
import Image from 'next/image';
import { useState } from 'react';

const Header = () => {
  const [isProductosHovered, setIsProductosHovered] = useState(false);

  return (
    <div>
        {/* Black Bar: moving bar */}
        <MovingBar/>

        {/* Header: logos y botones */}
        <header className="bg-white text-white p-6 flex items-center justify-between">

          {/* Left: Search Button */}
          <div className="flex-shrink-0 ml-10">
            <button className="">
              <h1 className='text-gray-500 font-normal text-lg'>Buscar</h1>
            </button>
          </div>

          {/* Center: Logo */}
          <div className="flex-grow flex justify-center ml-24">
          <Link href="/" className="text-xl text-black font-bold">
              <Image 
                alt='logo'
                src={logo}
                width={150}
                height={100}
              />
            </Link>
          </div>

          {/* Right: Login and Cart Buttons */}
          <div className="flex-shrink-0 flex space-x-2 mr-5">

            <button className="">
              <h1 className='text-gray-500 font-normal text-lg'>Login</h1>
            </button>

            <button className="relative text-black py-2 px-4 flex items-center justify-center">
              <h1 className="text-gray-500 font-normal text-lg">Carrito</h1>
              <div className="absolute top-0 right-2 -mt-1 -mr-1 flex items-center justify-center w-4 h-4 bg-gray-500 text-white text-xs rounded-full">
                <span className='text-xxs font-light'>2</span>
              </div>
            </button>
            
          </div>


        </header>

        {/* Categorias: hay eventos */}
        <div className="flex justify-center space-x-8 pt-2 py-6 bg-white">
          <Link href="#inicio" className='text-gray-500 font-normal text-sm'>INICIO</Link>
          <Link href="#inicio" className='text-gray-500 font-normal text-sm'>NEW COLLECTION</Link>
            <Link
              onMouseEnter={() => setIsProductosHovered(true)}
              onMouseLeave={() => setIsProductosHovered(false)}
              href="#inicio" 
              className='text-gray-500 font-normal text-sm relative'>
                PRODUCTOS
            </Link>

          <Link href="#inicio" className='text-gray-500 font-normal text-sm'>SALE</Link>
        </div>

        {/* Sliding menu:  */}
        <div
          className={`absolute left-0 w-full bg-white shadow-lg border-t-2 border-gray-200 transition-opacity duration-500 
          ${isProductosHovered ? 'opacity-100' : 'opacity-0 pointer-events-none' }`}>
          <div className="grid grid-cols-6 gap-4 p-4">
            {/* Column 1 */}
            <div>
              <ul>
                <li className='text-gray-500 font-normal text-sm relative mb-3'>NEW COLLECTION</li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <ul className='mb-2'>
                <li className='text-gray-500 font-normal text-sm relative mb-3'>ABRIGOS</li>
                <li className='text-gray-500 font-normal text-sm relative mb-1'>Sweaters</li>
                <li className='text-gray-500 font-normal text-sm relative mb-1'>Jackets </li>
                <li className='text-gray-500 font-normal text-sm relative mb-1'>Hoodies</li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <ul>
                <li className='text-gray-500 font-normal text-sm relative mb-3'>REMERAS</li>
                <li className='text-gray-500 font-normal text-sm relative mb-1'>Boxy</li>
                <li className='text-gray-500 font-normal text-sm relative mb-1'>Oversize</li>
                <li className='text-gray-500 font-normal text-sm relative mb-1'>Heavyweight</li>
              </ul>
            </div>

            {/* Column 4 */}
            <div>
              <ul>
                <li className='text-gray-500 font-normal text-sm relative mb-3'>PANTS</li>
                <li className='text-gray-500 font-normal text-sm relative mb-1'>SHORTS</li>
                <li className='text-gray-500 font-normal text-sm relative mb-1'>SALE</li>
              </ul>
            </div>

            {/* Column 5 */}
            <div>
              <ul>
                <li className='text-gray-500 font-normal text-sm relative mb-3'>ACCESORIOS</li>
                <li className='text-gray-500 font-normal text-sm relative mb-1'>Beanies</li>
                <li className='text-gray-500 font-normal text-sm relative mb-1'>&nbsp;</li>
                <li className='text-gray-500 font-normal text-sm relative mb-1'>VER TODO</li>

              </ul>
            </div>
            {/* Column 6 */}
            <div>
              <ul>
                <li className='text-gray-500 font-normal text-sm relative'>GIFT CARDS</li>
              </ul>
            </div>

          </div>
        </div>
    </div>
  );
};

export default Header;
