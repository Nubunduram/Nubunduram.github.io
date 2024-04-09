import homeHeaderImg from "../../../assets/homeHeader.jpg";
import "./_HomeHeader.scss";

const HomeHeader = () => {
  return (
    <header id="home-header" className="home-header">
      <div className="img-container">
        <img src={homeHeaderImg} />
      </div>
      <h1>
        <span className="name" id="name">Antoine</span>
        <span className="last-name" id="last-name">Caron</span>
        <span className="job-title" id="job-title">Web Developer Front-End</span>
      </h1>
    </header>
  )
}

export default HomeHeader
