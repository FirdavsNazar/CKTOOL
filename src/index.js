// import React from 'react';
// import ReactDOM from 'react-dom/client'; // Import from 'react-dom/client' for React 18
// import './index.scss';
// import App from './App';
// import { I18nextProvider } from 'react-i18next';
// import i18n from './i18n'; // Import your i18n configuration
// import * as serviceWorker from './serviceWorker';

// // React 18: Create a root for the app
// const root = ReactDOM.createRoot(document.getElementById('root'));

// // Wrap the App component with I18nextProvider to provide translation functionality
// root.render(
//   <I18nextProvider i18n={i18n}>
//     <App />
//   </I18nextProvider>
// );

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();


import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from 'react-dom/client' for React 18
import './index.scss';
import App from './App';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n'; // Import your i18n configuration
import * as serviceWorker from './serviceWorker';

// React 18: Create a root for the app
const root = ReactDOM.createRoot(document.getElementById('root'));

// Wrap the App component with I18nextProvider to provide translation functionality
root.render(
  <I18nextProvider i18n={i18n}>
    <App />
  </I18nextProvider>
);

// Initialize Weglot after the app has rendered
const initializeWeglot = () => {
  const script = document.createElement('script');
  script.src = "https://cdn.weglot.com/weglot.min.js";
  script.async = true;
  script.onload = () => {
    if (window.Weglot) {
      window.Weglot.initialize({
        api_key: 'wg_442715358f59d8f91b73163b1fc9a84d0', // Replace with your actual API key
      });
    } else {
      console.error('Weglot script failed to load.');
    }
  };
  document.body.appendChild(script);
};

// Call the function to initialize Weglot
initializeWeglot();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
