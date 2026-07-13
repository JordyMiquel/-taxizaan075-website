import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Booking from "./components/Booking";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
import Fleet from "./components/Fleet";
import Image from "next/image";

export default function Home() {
  return (
    <>
  <Navbar />
  <Hero />
  <Services />
  <Fleet />
  <Pricing />
  <Booking />
  <Reviews />
  <Footer />
</>
  );
}