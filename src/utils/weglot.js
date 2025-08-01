import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Function to initialize Weglot
export const initializeWeglot = () => {
    if (window.Weglot && !window.Weglot.initialized) {
        window.Weglot.initialize({
            api_key: 'wg_9aa007aca5ee2b9361aa62d53fd71a741',
        });
        window.Weglot.initialized = true; // Mark Weglot as initialized
    } else {
        console.error('Weglot script not loaded or already initialized.');
    }
};

// React component to reinitialize Weglot on route change
export const WeglotReinitializer = () => {
    const location = useLocation();

    useEffect(() => {
        initializeWeglot(); // Reinitialize Weglot whenever the route changes
    }, [location]);

    return null; // This component doesn't render anything
};
