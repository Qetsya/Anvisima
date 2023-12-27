import smallArticleImage from "../../../assets/images/hero/audi-r8-Small.avif";
import mediumArticleImage from "../../../assets/images/hero/audi-r8-Medium.avif";

const Article = () => {
  return (
    <div className="wrapper">
      <section className="section-container">
        <article className="section-container-article">
          <h3 className="section-container-article-title">Lorem ipsum dolor</h3>
          <p className="section-container-article-content">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
            amet incidunt autem. Nulla nisi molestias fugiat, magnam eius esse
            at, praesentium, eum laboriosam sequi perferendis officiis quod
            pariatur reiciendis. Iure.
          </p>
        </article>
        <div className="section-container__image-box">
          <img
            className="section-container__image"
            srcSet={`
            ${smallArticleImage} 425w,
            ${mediumArticleImage} 768w,
          `}
            sizes="(max-width: 426px), 427px"
            src={mediumArticleImage}
            alt="car-logo"
          />
        </div>
      </section>
    </div>
  );
};

export default Article;
