
function Navigation( {currentPage, changeToPage} ) {
    return (
        <div className="header" style={{ display: "flex"}}>
        <h1>Steven Blake</h1>    
            <ul className="nav-tabs" >
                <li className="nav-item">
                    <a href="#about" onClick={() => changeToPage('About')} className={currentPage === "About" ? 'nav-link active' : 'nav-link'}>About</a>
                </li>
                <li className="nav-item">
                    <a href="#portfolio" onClick={() => changeToPage('Portfolio')} className={currentPage === "Portfolio" ? 'nav-link active' : 'nav-link'}>Portfolio</a>
                </li>
                <li className="nav-item">
                    <a href="#contact" onClick={() => changeToPage('Contact')} className={currentPage === "Contact" ? 'nav-link active' : 'nav-link'}>Contact</a>
                </li>
                <li className="nav-item">
                    <a href="#resume" onClick={() => changeToPage('Resume')} className={currentPage === "Resume" ? 'nav-link active' : 'nav-link'}>Resume</a>
                </li>
            </ul>
        </div>

    );
  }
  
  export default Navigation;
  