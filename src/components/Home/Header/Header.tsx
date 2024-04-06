import homeHeaderImg from "../../../assets/homeHeader.jpg";
import "./_Header.scss";

const Header = () => {
  return (
    <header>
      <div className="img-container">
        <img src={homeHeaderImg}/>
      </div>
      <div className="title-container">
        <h1>
          <span className="name" id="name">Antoine<br />Caron</span>
          <br />
          <span id="job-title" className="job-title">Web Developer Front-End</span>
        </h1>
      </div>
    </header>
  )
}

export default Header
