const Article = ({ article }) => {
  return (
    <section className="section-container">
      <article className="section-container-article">
        <h3 className="section-container-article-title">{article.title}</h3>
        <p className="section-container-article-content">{article.content}</p>
      </article>
      <div className="section-container__image-box">
        <img
          className="section-container__image"
          srcSet={`
            ${require(`../../assets/images/hero/${article.image.imageName}-Small.${article.image.imageType}`)} 425w,
            ${require(`../../assets/images/hero/${article.image.imageName}-Medium.${article.image.imageType}`)} 768w,
          `}
          sizes="(max-width: 426px), 427px"
          src={require(`../../assets/images/hero/${article.image.imageName}-Medium.${article.image.imageType}`)}
          alt={`${article.image.imageAlt}`}
        />
      </div>
    </section>
  );
};
export default Article;
