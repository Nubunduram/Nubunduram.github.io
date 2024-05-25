import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';

interface DarkModeToggleProps {
  toggleDarkMode: () => void;
}

const DarkModeToggle = ({ toggleDarkMode }: DarkModeToggleProps) => {
  return (
    <>
      <button aria-label='Dark Mode Toggle Button' id="toggle-dark-mode" onClick={toggleDarkMode}>
        <FontAwesomeIcon icon={faLightbulb} />
      </button>
    </>
  );
}

export default DarkModeToggle;
