"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import ImageSlider from "../reusable/ImageSlider";
import ImageSlider2 from "../reusable/ImageSlider2";

const Main = () => {
  return (
    <div className="styles.content mt-28 md:mt-44 ">
      <ImageSlider />
    </div>
  );
};

export default Main;
