import Banner from "./components/Banner/Banner";
import Banner2 from "./components/Banner/Banner2";
import FooterSection from "./components/Footer/FooterSection";
import Hero from "./components/Hero/Hero";
import Service from "./components/ServiceSection/Service";
import Subscribe from "./components/Subscribe/Subscribe";

const App = () => {
  return (
    <main className="overflow-x-hidden bg-white text-dark">
      <Hero />
      <Service />
      <Banner />
      <Subscribe />
      <Banner2 />
      <FooterSection />
    </main>
  );
};

export default App;
