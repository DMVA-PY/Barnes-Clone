"use client";
import Main from "@/components/main/Main";
import HeroSecond from "@/components/nonreusable/HeroSecond";
import HeroThird from "@/components/nonreusable/HeroThird";
import { useEffect, useState } from "react";
import { CartProvider } from "/home/vare/project/frelo/silence_com/clients/ecom/context/CartProvider.jsx";
import Image from "next/image";
import styles from '../styles/main.module.css'; // Import CSS module if you have styles

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  // Simulate loading time
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1000); // Adjust the time as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className={styles.mainContainer}>
      <div className={`${styles.contentWrapper} ${isLoaded ? styles.fadeIn : styles.hidden}`}>
          <div>
            <Main />
            <HeroSecond />
            <HeroThird />
          </div>
      </div>
    </main>
  );
}
