import "./_HomeHeader.scss";
import VisitCard from "./VisitCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const HomeHeader = () => {
  return (
    <header id="home-header" className="home-header">
      <div className="img-container">
        <picture>
          <source srcSet="./assets/home-header.webp" type="image/webp" />
          <img width={720} height={720} src="./assets/home-header.jpg" alt="A toy boat on the beach" />
        </picture>
      </div>
      <div className="pull-and-card">
        <span><span className="letter">P</span><span className="letter letter-1">U</span><span className="letter letter-2">L</span><span className="letter letter-3">L</span> <span className="letter letter-4">M</span><span className="letter letter-5">E</span></span>
        <FontAwesomeIcon icon={faArrowRight} />
        <VisitCard />
      </div>
    </header>
  )
}

export default HomeHeader
