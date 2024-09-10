import { useState } from 'react';

export default function Cart() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCart = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      
      {/* Cart Icon */}
      <button onClick={toggleCart} className="fixed top-4 right-4 z-20">
        {/* Add your cart icon here */}
        <img src="/cart-icon.svg" alt="Cart" />
      </button>
    </div>
  );
}
