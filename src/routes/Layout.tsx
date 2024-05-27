import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { useState, useEffect } from 'react';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {

    const [isDarkMode, setIsDarkMode] = useState(() => {
        const storedMode = localStorage.getItem('darkMode');
        if (storedMode !== null) {
            return JSON.parse(storedMode);
        } else {
            return window.matchMedia('(prefers-color-scheme: dark)').matches;
        }
    });

    const toggleDarkMode = () => {
        setIsDarkMode((prevMode: boolean) => {
            const newMode = !prevMode;
            localStorage.setItem('darkMode', JSON.stringify(newMode));
            return newMode;
        });
    };

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
            <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
            {children}
            <Footer />
        </>
    );
}

export default Layout;
