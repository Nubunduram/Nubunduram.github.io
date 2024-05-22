import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';

const DarkModeToggle = ({ toggleDarkMode }) => {
  return (
    <>
      <button aria-label='Dark Mode Toggle Button' id="toggle-dark-mode" onClick={toggleDarkMode}>
        <FontAwesomeIcon icon={faLightbulb} />
      </button>
    </>
  );
}

export default DarkModeToggle;
