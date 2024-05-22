const scrollToTop = () => {
    // Scroll to the top of the page
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Add smooth scrolling animation
    });
};

export { scrollToTop };