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

      {/* Sliding Cart */}
      <div
        className={`fixed top-0 right-0 h-screen bg-white shadow-lg transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-500 ease-in-out z-10 w-full md:w-1/2 lg:w-1/3`}
      >
        <div className="p-6">
          <h2 className="text-xl font-semibold">Carrito de compras</h2>

          {/* Cart Items */}
          <div className="mt-4">
            <div className="mb-2">
              <h3 className="font-medium">Hoodie Automobile Club Vintage Blue</h3>
              <p className="text-gray-500">(talle 1)</p>
              <p className="font-bold">$175.000,00</p>
            </div>

            <div className="mt-4">
              <p>Subtotal (sin envío): <span className="font-bold">$149.000,00</span></p>
            </div>

            <div className="mt-4">
              <p>Entregas para el CP: <span className="text-blue-500 cursor-pointer">Cambiar CP</span></p>
              <p className="text-blue-500 cursor-pointer">No sé mi código postal</p>
            </div>

            <div className="mt-4">
              <h4 className="font-semibold">Medios de envío</h4>
              <button className="mt-2 text-blue-500">Calcular</button>
              <div className="mt-2">
                <p>Nuestro local</p>
                <p>Punto de retiro Recoleta - Marcelo t de Alvear 1261</p>
                <p>Horario y Día de entrega a coordinar</p>
                <p className="font-bold">Gratis</p>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-lg font-bold">Total: $149.000,00</p>
              <p>O hasta 6 x $24.833,33 sin interés</p>
            </div>

            <button className="w-full bg-blue-500 text-white py-3 mt-4">
              COMPRAR
            </button>

            <button className="w-full text-blue-500 mt-4">
              Ver más productos
            </button>
          </div>
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
  );
}
