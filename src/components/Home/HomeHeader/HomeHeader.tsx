import "./_HomeHeader.scss";

const HomeHeader = () => {
  return (
    <header id="home-header" className="home-header">
      <div className="img-container">
        <picture>
          <source srcSet="./assets/home-header.webp" type="image/webp" />
          <img width={720} height={720} src="./assets/home-header.jpg" alt="Green plant with light green background" />
        </picture>      </div>
      <h1>
        <span className="name" id="name">Antoine</span>
        <span className="last-name" id="last-name">Caron</span>
        <span className="job-title" id="job-title">Web Developer</span>
      </h1>
    </header>
  )
}

export default HomeHeader
