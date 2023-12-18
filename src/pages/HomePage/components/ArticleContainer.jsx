import articleImage from "../../../assets/images/audi-r8.jpg";

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
          <img className="section-container__image" src={articleImage} alt="car-logo" />
        </div>
      </section>
    </div>
  );
};

export default Article;
