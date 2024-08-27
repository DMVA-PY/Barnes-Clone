'use client'
import Main from "@/components/main/Main";
import HeroSecond from "@/components/nonreusable/HeroSecond";
import HeroThird from "@/components/nonreusable/HeroThird";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);

  // Simulate content loading or handle real loading (e.g., image loading)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 300); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return null; // Render nothing while loading
  }
  return (
    <main className={`transition-opacity duration-1500 ease-in-out ${loading ? 'opacity-0' : 'opacity-100'}`}>
        <Main/>
        <HeroSecond/>
        <HeroThird/>
    </main>
  ); 
}
