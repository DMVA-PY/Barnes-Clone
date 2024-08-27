import React from 'react';
import Product from "@/components/reusable/Product";

const HeroThird = () => {
  return (
    <div className="h-screen md:grid grid-cols-1 md:grid-cols-4 grid-rows-2 md:grid-rows-1 gap-4 p-4">
      {/* NUEVOS INGRESOS */}
      <div className="col-span-1 row-span-1 md:row-span-2 ">
        <h1 className="text-4xl md:text-6xl font-normal text-gray-500 p-5">
          NUEVOS INGRESOS
        </h1>
      </div>

      {/* Grid Items */}
      <div className="col-span-1 md:col-span-3 grid md:grid-cols-3 lg:grid-cols-3 gap-4">
        {/* mt-[-290px] sm:mt-[-260px] md:mt-[0px] */}
        {/* Product 1 - Always visible */}
        <Product />

        {/* Additional Products - Hidden on small screens */}
        <div className="hidden md:block">
          <Product />
        </div>
        <div className="hidden md:block">
          <Product />
        </div>
        <div className="hidden md:block">
          <Product />
        </div>
        <div className="hidden md:block">
          <Product />
        </div>
      </div>

    </div>
  );
};

export default HeroThird;
