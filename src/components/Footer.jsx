function Footer() {
  return (
    <footer className="footer">
      <a
        className="footitem"
        href="http://www.linkedin.com/in/steven-blake-34582b5"
        target="_blank"
      >
        {" "}
        <img
          className="foota"
          src="linkedin_icon.png"
          alt="Linkin"
        />
      </a>
      <a className="footitem" href="https://github.com/sjbdlt" target="_blank">
        {" "}
        <img
          className="foota"
          src="github-icon.png"
          alt="GitHub"
        />
      </a>
      <a className="footitem" href="https://twitter.com/sjbdlt" target="_blank">
        {" "}
        <img className="foota" src="x-icon.png" alt="X" />
      </a>
    </footer>
  );
}

export default Footer;
