import Contact from "@/components/Contact";
import Countries from "@/components/Countries";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import Products from "@/components/Products";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Products />
      <Process />
      <Countries />
      <WhyChooseUs />
      <Testimonials />
      <Contact />
      <Footer />      
    </>
  );
}