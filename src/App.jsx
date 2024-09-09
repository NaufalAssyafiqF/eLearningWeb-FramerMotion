import Banner from "./components/Banner/Banner";
import Hero from "./components/Hero/Hero";
import Service from "./components/ServiceSection/Service";

const App = () => {
  return (
    <main className="overflow-x-hidden bg-white text-dark">
      <Hero />
      <Service />
      <Banner />
    </main>
  );
};

export default App;
