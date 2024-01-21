function Portfolio() {
    return (
      <div>    
        <h3>Project Portfolio</h3>   
        <table className="porttable" >
          <tr>
           <td><a href="https://sjbdlt.github.io/SB-Challenge-2-ASU/" target="_blank"><img className="pimage" src="../src/assets/images/generalprojectpic.jpg" alt="Profile Project" /></a></td>
           <td></td>
           <td><a href="https://aqueous-escarpment-14867-2705177539b4.herokuapp.com" target="_blank"><img className="pimage" src="../src/assets/images/WeatherOpen.png" alt="Weather Site" /></a></td>
          </tr>
          <tr>
           <td></td>
           <td></td>
           <td></td>
          </tr>
          <tr>
           <td><a href="https://dylanhoryza.github.io/team-1-movie-picker/index.html" target="_blank"><img className="pimage" src="../src/assets/images/moviepicker.png" alt="Project 1" /></a></td>
           <td></td>
           <td> <a href="https://radiant-fjord-87739-920e7bb79c22.herokuapp.com" target="_blank"><img className="pimage" src="../src/assets/images/LocalBrewery.png" alt="Project 2" /></a></td>
          </tr>         
        </table>   
      </div>
    );
  }
  
  export default Portfolio;