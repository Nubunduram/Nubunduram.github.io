import "./_Project.scss";

const Project = () => {
    return (
        <div className="project">
            <ul className="project__stack">
                <li>JavaScript |</li>
                <li>CSS |</li>
                <li>Firebase</li>
            </ul>
            <h2 className="project__title">Project Footballia</h2>
            <p className="project__detail">
                This project involved creating a responsive sign-in/sign-up form page with a dropdown menu button for toggling between English and French translations.
            </p>
            <p className="project__link">Click to checkout !</p>
        </div>
    )
}

export default Project
