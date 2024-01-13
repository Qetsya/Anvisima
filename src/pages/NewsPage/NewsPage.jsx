import Article from "../../components/Article/Article";
import { data } from "../../common/data/newsPageArticles";

const NewsPage = () => {
  return (
    <div className="wrapper">
      <div className="news-main-container">
        {data.map((data) => {
          let randomKey = Math.random();
          return <Article article={data} key={randomKey} />;
        })}
      </div>
    </div>
  );
};

export default NewsPage;
