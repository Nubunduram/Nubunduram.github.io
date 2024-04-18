import { useState, useEffect } from 'react';

const DarkModeToggle = () => {
    // Step 1: Define state for dark mode
    const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
        // Check local storage for saved preference
        const storedMode = localStorage.getItem('darkMode');
        if (storedMode !== null) {
            // Use stored preference if available
            return JSON.parse(storedMode);
        } else {
            // Otherwise, check the preferred color scheme of the device
            return window.matchMedia('(prefers-color-scheme: dark)').matches;
        }
    });

    // Step 2: Function to toggle dark mode
    const toggleDarkMode = () => {
        setIsDarkMode(prevMode => {
            const newMode = !prevMode;
            // Update local storage with the new mode
            localStorage.setItem('darkMode', JSON.stringify(newMode));
            return newMode;
        });
    };

    // Step 3: UseEffect to apply dark mode class to body on mount
    useEffect(() => {
        const element = document.body || document.documentElement;
        if (isDarkMode) {
            element.classList.add('dark');
        } else {
            element.classList.remove('dark');
        }
    }, [isDarkMode]);

    return (
        <>
            <button id="toggle-dark-mode" onClick={toggleDarkMode}>
                <i className="fa-solid fa-lightbulb"></i>
            </button>
        </>
    );
}

export default DarkModeToggle;
