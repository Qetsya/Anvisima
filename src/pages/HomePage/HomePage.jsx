import HeroCarousel from "../../components/HeroCarousel/HeroCarousel";
import ServicesContainer from "./components/ServicesContainer";
import ArticleModel from "../../common/models/articleModel";
import Article from "../../components/Article/Article";

const HomePage = () => {
  let firstArticle = new ArticleModel(
    "Lorem ipsum",
    `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
    amet incidunt autem. Nulla nisi molestias fugiat, magnam eius esse
    at, praesentium, eum laboriosam sequi perferendis officiis quod
    pariatur reiciendis. Iure.`,
    "audi-r8",
    "avif"
  );

  return (
    <div className="main-container">
      <HeroCarousel />
      <ServicesContainer />
      <div className="wrapper">
        <Article article={firstArticle} />
      </div>
    </div>
  );
};

export default HomePage;
