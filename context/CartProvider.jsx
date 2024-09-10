'use client'
import React, { createContext, useContext, useState, useEffect } from 'react';

// Create the Cart Context
const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [isCarritoOpen, setIsCarritoOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Toggle cart open/close
  const toggleCarrito = () => {
    setIsCarritoOpen(!isCarritoOpen);
  };

  // Prevent the component from animating before user interaction
  useEffect(() => {
    setIsMounted(true); // When component mounts, allow transitions
  }, []);

  return (
    <CartContext.Provider value={{ isCarritoOpen, toggleCarrito, isMounted }}>
      {children}
    </CartContext.Provider>
  );
};
