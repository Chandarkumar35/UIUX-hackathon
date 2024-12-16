import Image from "next/image";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Category from "./components/category";
import Music from "./music";
import Products from "./components/selling";
import Delivery from "./components/delivery";
import Flesh from "./components/flesh";
import Footer from "./components/footer";
import Feature from "./components/feature";
import Explore from "./components/exploreproduct";

export default function Home() {
  return (
   
    <div>
      <Navbar/>
      <Hero/>
      <Flesh/>
      <Category/>
      <Products/>
      <Music/>
      <Explore/>
      <Feature/>
      <Delivery/>
      <Footer/>
    </div>

  );
}
