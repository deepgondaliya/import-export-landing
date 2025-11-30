import Contact from "@/components/Contact";
import Countries from "@/components/Countries";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Trust from "@/components/Trust";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Trust />
      <Services />
      <Process />
      <Countries />
      <WhyChooseUs />
      <Testimonials />
      <Contact />
      <Footer />      
    </>
  );
}