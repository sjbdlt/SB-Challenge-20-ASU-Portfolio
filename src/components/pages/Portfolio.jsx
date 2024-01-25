import "../../style/portfolio.css";

function Portfolio() {
  return (
  <div>
    <h3>Portfolio</h3>

    <section>
       
      <div className="flex-img">
        <div id="d1">
          <a
            className="porta"
            title="Note Taker Project"
            href="https://cryptic-brushlands-51285-19a827d79ca3.herokuapp.com/"
            target="_blank"
          >
            <img
              className="pimage"
              src="NoteTaker.png"
              alt="Note Taker Project"
            />
          </a>
         
        </div>
        <div id="d2">
          <a
            className="portsubitem"
            title="Note Taker Project Code"
            href="https://github.com/sjbdlt/SB-Challenge-11-ASU-NoteTaker.git"
            target="_blank"
          >
            {" "}
            <img
              className="portsubitem1"
              src="github-icon.png"
              alt="GitHub"
            />
          </a>
        </div>
        
      </div>
      <div className="flex-img">
        <div>
          <a
            className="porta"
            title="Tech Blog Project"
            href="https://aqueous-escarpment-14867-2705177539b4.herokuapp.com"
            target="_blank"
          >
            <img
              className="pimage"
              src="TechBlog.jpg"
              alt="Tech Blog"
            />
          </a>
        </div>
        <div>
          <a
            className="portsubitem"
            title="Tech Blog Project Code"
            href="https://github.com/sjbdlt/SB-Challenge-14-ASU-TechBlog.git"
            target="_blank"
          >
            {" "}
            <img
              className="portsubitem1"
              src="github-icon.png"
              alt="GitHub"
            />
          </a>
        </div>
      </div>
      <div className="flex-img">
        <div>
          <a
            className="porta"
            title="Weather Project"
            href="https://sjbdlt.github.io/SB-Challenge-6-ASU/"
            target="_blank"
          >
            <img
              className="pimage"
              src="WeatherOpen.png"
              alt="Weather Site"
            />
          </a>
        </div>
        <div>
          <a
            className="portsubitem"
            title="Weather Project Code"
            href="https://github.com/sjbdlt/SB-Challenge-6-ASU.git"
            target="_blank"
          >
            {" "}
            <img
              className="portsubitem1"
              src="github-icon.png"
              alt="GitHub"
            />
          </a>
        </div>
      </div>
      <div className="flex-img">
        <div>
          <a
            className="porta"
            title="Jate PWA Project"
            href="https://sjbprowebapp.onrender.com/"
            target="_blank"
          >
            <img
              className="pimage"
              src="Jate.png"
              alt="Jate PWA"
            />
          </a>
        </div>
        <div>
          <a
            className="portsubitem"
            title="Jate PWA Project Code"
            href="https://github.com/sjbdlt/SB-Challenge-19-ASU-ProWebAp.git"
            target="_blank"
          >
            {" "}
            <img
              className="portsubitem1"
              src="github-icon.png"
              alt="GitHub"
            />
          </a>
        </div>
      </div>
      <div className="flex-img">
        <div>
          <a
            className="porta"
            title="First Group Project - Movie Picker"
            href="https://dylanhoryza.github.io/team-1-movie-picker/index.html"
            target="_blank"
          >
            <img
              className="pimage"
              src="moviepicker.png"
              alt="Project 1"
            />
          </a>
        </div>
        <div>
          <a
            className="portsubitem"
            title="First Group Project Code"
            href="https://github.com/sjbdlt/team-1-movie-picker.git"
            target="_blank"
          >
            {" "}
            <img
              className="portsubitem1"
              src="github-icon.png"
              alt="GitHub"
            />
          </a>
        </div>
      </div>
      <div className="flex-img">
        <div>
          <a
            className="porta"
            title="Second Group Project - Local Breweries"
            href="https://radiant-fjord-87739-920e7bb79c22.herokuapp.com"
            target="_blank"
          >
            <img
              className="pimage"
              src="LocalBrewery.png"
              alt="Project 2"
            />
          </a>
        </div>
        <div>
          <a
            className="portsubitem"
            title="Second Group Project Code"
            href="https://github.com/sjbdlt/LocalBreweries.git"
            target="_blank"
          >
            {" "}
            <img
              className="portsubitem1"
              src="github-icon.png"
              alt="GitHub"
            />
          </a>
        </div>
      </div>
    </section>

    </div>
  );
}

export default Portfolio;
