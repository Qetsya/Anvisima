import HeroCarousel from "../../components/HeroCarousel/HeroCarousel";
import ServicesContainer from "./components/ServicesContainer";
import ArticleContainer from "./components/ArticleContainer";

const HomePage = () => {

  return (
    <div className="main-container">
      <HeroCarousel/>
      <ServicesContainer/>
      <ArticleContainer/>
    </div>
  );
};

export default HomePage;
