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
      <p>
        <span>PULL ME</span>
        <FontAwesomeIcon icon={faArrowRight} />
      </p>
      <VisitCard />
    </header>
  )
}

export default HomeHeader
