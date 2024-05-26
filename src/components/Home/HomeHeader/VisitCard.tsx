import "./_VisitCard.scss";
import { motion } from "framer-motion";

const VisitCard = () => {
    return (
        <motion.div className="card-container"
            drag={"x"}
            dragConstraints={{
                left: -500,
                right: 0,
            }}
        >
            <div className="card">
                <img src={"/assets/visit-card.png"} alt="card" className="card__image" />
                <h1 className="card__text">Antoine<br />Caron<br /><span className="card__text__job">Full-Stack Developer</span></h1>
                <ul className="card__contact">
                    <li>+33 6 51 63 02 16</li>
                    <li>caron.antoine.pro@gmail.com</li>
                </ul>
                <img className="card__logo" width={72} height={41} src="/assets/logo-light.png" />
                <p className="card__resume">Download Resume</p>
            </div>
        </motion.div>
    )
}

export default VisitCard