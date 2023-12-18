const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <div className="footer">
      <div className="wrapper">
        <div className="footer-content">
          <span>&copy; {date}.Anvisima</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
