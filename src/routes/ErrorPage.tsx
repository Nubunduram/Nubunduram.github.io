import { HashLink as Link } from "react-router-hash-link"

const ErrorPage = () => {
  return (
    <main className="error-page">
      <h1>Error&nbsp;
        <span className="error-number error-1">4</span>
        <span className="error-number error-2">0</span>
        <span className="error-number error-3">4</span>
      </h1>
      <p>Seems like you have lost your way...<br />May be i can help you ?</p>
      <Link to="/#contact">Click me !</Link>
    </main>
  )
}

export default ErrorPage
