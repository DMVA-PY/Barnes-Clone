import Link from 'next/link';
import MovingBar from "@/components/header/MovingBar";

const Header = () => {
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
          <div className="flex-grow text-center">
            <a href="/" className="text-xl text-black font-bold">MyLogo</a>
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

        {/* Categorias: sliding menu */}
        <div className="flex justify-center space-x-8 py-4 bg-gray-100">
          <Link href="#inicio" className='text-gray-500 font-normal text-base'>INICIO</Link>
          <Link href="#inicio" className='text-gray-500 font-normal text-base'>NEW COLLECTION</Link>
          <Link href="#inicio" className='text-gray-500 font-normal text-base'>PRODUCTOS</Link>
          <Link href="#inicio" className='text-gray-500 font-normal text-base'>SALE</Link>
        </div>
    </div>
  );
};

export default Header;
