// Home.jsx
import Header from "./Header";
import HeroSlider from "./HeroSlider";
import CategorySection from "./CategorySection";
import BrandSection from "./BrandSection";
import AgriBestDeals from "./AgriBestDeals";
import CropProducts from "./CropProducts";
import PopularProducts from "./PopularProducts";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <Header />
      <HeroSlider />
      <CategorySection />
      <BrandSection />
      <AgriBestDeals />
      <CropProducts showFooter={false} />
      <PopularProducts />
      <Footer></Footer>
    </>
  );
}

export default Home;
