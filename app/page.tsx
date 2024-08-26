import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import Main from "@/components/main/Main";

import Image from "next/image";
import HeroSecond from "@/components/nonreusable/HeroSecond";

export default function Home() {
  return (
    <main>
        <Main/>
        <HeroSecond/>
    </main>
  ); 
}
