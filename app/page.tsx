import Hero from "./__components/Hero";
import Discover from "./__components/Discover";
import Info from "./__components/Info";
import Testimonies from "./__components/Testimonies";
import FAQ from "./__components/FAQ";
import Banner from "./__components/Banner";

const page = () => {
  return (
    <div>
      <Hero />
      <Discover />
      <Info />
      <Testimonies />
      <FAQ />
      <Banner />
    </div>
  );
};

export default page;
