"use client";

import React, { useState, useEffect } from "react";
import ImageGallery, { ReactImageGalleryItem } from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import useWindowSize from "../../hooks/useWindowSize";
import "/home/vare/project/frelo/silence_com/clients/ecom/styles/ImageSlider2.css"; // Custom CSS file for styling

const ImageSlider: React.FC = () => {
  const size = useWindowSize();

  // Small screen images
  const smallImages: ReactImageGalleryItem[] = [
    {
      original: "/main_smart1.webp",
      thumbnail: "/main_smart1.webp",
    },
    {
      original: "/main_smart1.webp",
      thumbnail: "/main_smart1.webp",
    },
    {
      original: "/main_smart1.webp",
      thumbnail: "/main_smart1.webp",
    },
    {
      original: "/main_smart1.webp",
      thumbnail: "/main_smart1.webp",
    },
  ];

  // Medium screen images
  const mediumImages: ReactImageGalleryItem[] = [
    {
      original: "/main_slide2.webp",
      thumbnail: "/main_slide2.webp",
    },
    {
      original: "/main_1.webp",
      thumbnail: "/main_1.webp",
    },
    {
      original: "/main_slide2.webp",
      thumbnail: "/main_slide2.webp",
    },
    {
      original: "/main_1.webp",
      thumbnail: "/main_1.webp",
    },
  ];

  // Select images based on window width
  const images = size.width < 768 ? smallImages : mediumImages;

  // Auto slide settings (5 seconds)
  const [autoPlay, setAutoPlay] = useState(true);
  const galleryRef = React.createRef<ImageGallery>();

  // Manual slide button handler
  const handleManualSlide = () => {
    if (galleryRef.current) {
      galleryRef.current.slideToIndex(0); // or any specific index you want to slide to
    }
  };

  return (
    <div className="w-screen">
      <ImageGallery
        items={images}
        autoPlay={true}
        slideInterval={5000} // 5 seconds auto slide interval
        showPlayButton={false} // Hide the default play button
        showFullscreenButton={false} // Hide fullscreen button
        showThumbnails={false} // Hide thumbnails
        showNav={false} // Remove the side navigation arrows
      />
    </div>
  );
};

export default ImageSlider;
