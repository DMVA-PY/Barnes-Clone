import Link from 'next/link';
import MovingBar from "@/components/header/MovingBar";

const Header = () => {
  return (
    <div>
      <MovingBar/>

      <header className="bg-white text-white p-6 flex items-center justify-between">

        {/* Left: Search Button */}
        <div className="flex-shrink-0">
          <button className="bg-gray-600 p-2 rounded-full hover:bg-gray-500 focus:outline-none">
            <span className="sr-only">Search</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a7 7 0 110 14 7 7 0 010-14zm0 0l7 7"></path>
            </svg>
          </button>
        </div>

        {/* Center: Logo */}
        <div className="flex-grow text-center">
          <a href="/" className="text-xl text-black font-bold">MyLogo</a>
        </div>

        {/* Right: Login and Cart Buttons */}
        <div className="flex-shrink-0 flex space-x-2">

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
    </div>
  );
};

export default Header;
