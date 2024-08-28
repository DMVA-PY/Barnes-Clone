'use client'
import Link from 'next/link';
import MovingBar from "@/components/header/MovingBar";
import logo from '/home/vare/project/frelo/silence_com/clients/ecom/public/logo.webp'
import Image from 'next/image';
import { useState } from 'react';

const Header = () => {
  const [isProductosHovered, setIsProductosHovered] = useState(false);
  
  const [isOpen, setIsOpen] = useState(false);

  const toggleCart = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='fixed md:absolute top-0 left-0 w-full z-50  '>
        {/* Black Bar: moving bar */}
        <MovingBar/>

        {/* Header: logos y botones */}
        <header className="bg-white text-white p-4 md:p-6 flex items-center justify-between">

          {/* Left: Buscar Button */}
          <div className="hidden md:block flex-shrink-0 ">
            <button className="">
              <h1 className='text-gray-500 font-normal text-md md:text-lg  md:ml-10'>Buscar</h1>
            </button>
          </div>

          {/* Left: Smart Search Button */}
          <div className="block md:hidden lg:hidden flex-shrink-0 sm:ml-10 ml-6">
            <button className="">
              <h1 className='text-gray-500 font-normal text-md md:text-lg'>Menu</h1>
            </button>
          </div>

          {/* Center: Logo */}
          <div className="flex-grow flex justify-center ml-10 md:ml-[105px]">
            <Link href="/" className="text-xl text-black font-bold">
              <Image 
                alt='logo'
                src={logo}
                width={180}
                height={100}
                />
            </Link>
          </div>

          {/* Right: Login and Cart Buttons */}
          <div className="flex-shrink-0 flex space-x-2 mr-2 sm:mr-10">

            <button className="hidden md:block">
              <h1 className='text-gray-500 font-normal text-lg'>Login</h1>
            </button>

            {/* carrito */}
            <button className="relative text-black py-2 px-4 flex items-center justify-center">
              <h1 onClick={toggleCart} className="text-gray-500 font-normal text-md md:text-lg">Carrito</h1>
              <div className="absolute top-0 right-2 -mt-1 -mr-1 flex items-center justify-center w-4 h-4 bg-gray-500 text-white text-xs rounded-full">
                <span className='text-xxs font-light'>2</span>
              </div>
            </button>
            
          </div>

        </header>

        {/* Categorias: hay eventos */}
        <div className="hidden md:flex justify-center items-center space-x-8 pt-2 py-6 bg-white">

          <Link href="#inicio" className='text-gray-500 font-normal text-sm'>INICIO</Link>
          <Link href="#inicio" className='text-gray-500 font-normal text-sm'>NEW COLLECTION</Link>
          <div
            onMouseEnter={() => setIsProductosHovered(true)}
            onMouseLeave={() => setIsProductosHovered(false)}>

            <Link href="#inicio" className='text-gray-500 font-normal text-sm mt-[-1px]'>
              PRODUCTOS
            </Link>

            {/* Panel desplegable */}
            <div
              className={`absolute left-0 w-full bg-white shadow-lg transition-opacity duration-500 
              ${isProductosHovered ? 'opacity-100 z-50': 'opacity-0 pointer-events-none' }`}>
              <div className="grid grid-cols-6 p-8">
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
          <Link href="#inicio" className='text-gray-500 font-normal text-sm'>SALE</Link>
          
        </div>
        
        {/* Sliding cart: se activa con el boton cart */}
        <div className="relative">

        {/* Sliding Cart */}
        <div
          className={`fixed top-0 right-0 h-screen bg-white shadow-lg transform ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          } transition-transform duration-500 ease-in-out z-10 w-full md:w-1/2 lg:w-1/3`}
        >
          <div className="p-6">

            {/* Header carrito: carrito de compras */}
            <div className="flex justify-between items-center mb-4 border-b border-gray-300 pb-4">
              {/* Titulo */}
              <h2 className="text-center text-base font-normal text-gray-600 w-full">
                Carrito de compras
              </h2>
              
              {/* Close: x button */}
              <button onClick={toggleCart} className="text-2xl font-medium text-gray-600">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor" 
                  className="w-6 h-6 text-gray-500"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M6 18L18 6M6 6l12 12" 
                  />
                </svg>
              </button>
            </div>

            {/* Imagen and Info Container */}
            <div className="flex items-center space-x-4 mb-4">
              {/* Mini Image */}
              <div className="">
                <Image
                  src="/green_hoodie.webp" // Replace with your image path
                  alt="Product Image"
                  width={80} // Width of the mini image (16 * 4)
                  height={80} // Height of the mini image (16 * 4)
                  className="object-cover rounded border border-gray-300"
                />
              </div>

              {/* Informacion del carrito */}
              <div className="flex-1 text-gray-600">
                {/* Text */}
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-sm font-normal text-gray-600">Hoodie Automobile Club Vintage Blue</h3>
                  <button className="text-xs font-normal text-gray-600 underline">Borrar</button>
                </div>

                <p className="text-sm text-gray-500">(talle 1)</p>
                
                {/* Price and Quantity */}
                <div className="flex justify-between items-center mt-2">
                  <p className="text-sm font-bold text-gray-700">$175.000,00</p>
                  <div className="flex items-center space-x-2">
                    {/* Plus and minus counter buttons */}
                    <div className="flex border border-gray-300 rounded">
                      <button className="text-gray-500 border-r border-gray-300 px-3 py-1">
                        -
                      </button>
                      
                      <span className="text-gray-500 px-3 py-1">1</span>
                      
                      <button className="text-gray-500 border-l border-gray-300 px-3 py-1">
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Subtotal */}
            <div className="mt-4">
              <p className="text-gray-600">Subtotal (sin envío): <span className="font-bold text-gray-800">$149.000,00</span></p>
            </div>

            {/* Delivery Information */}
            <div className="mt-4">
              <p className="text-gray-600">Entregas para el CP: <span className="text-blue-500 cursor-pointer">Cambiar CP</span></p>
              <p className="text-blue-500 cursor-pointer">No sé mi código postal</p>
            </div>

            {/* Shipping Methods */}
            <div className="mt-4">
              <h4 className="font-semibold text-gray-700">Medios de envío</h4>
              <button className="mt-2 text-blue-500">Calcular</button>
              <div className="mt-2 text-gray-600">
                <p>Nuestro local</p>
                <p>Punto de retiro Recoleta - Marcelo T de Alvear 1261</p>
                <p>Horario y Día de entrega a coordinar</p>
                <p className="font-bold text-gray-800">Gratis</p>
              </div>
            </div>

            {/* Total */}
            <div className="mt-6 flex justify-between items-center">
              <p className="text-lg font-normal text-gray-600">Total:</p>
              
              <div className="text-right">
                <p className="text-lg font-normal text-gray-600">$149.000,00</p>
                <p className="text-sm text-gray-600">O hasta 6 x $24.833,33 sin interés</p>
              </div>
              
            </div>

            {/* Buttons */}
            <button className="w-full bg-black text-sm text-white py-3 mt-4">
              Iniciar compra
            </button>

            <button className="w-full text-gray-700 mt-4">
              Ver más productos
            </button>
          </div>
        </div>


        {/* Overlay when cart is open */}
        {isOpen && (
          <div
            onClick={toggleCart}
            className="fixed inset-0 bg-black opacity-50 z-5"
          ></div>
        )}
        </div>

    </div>
  );
};

export default Header;
