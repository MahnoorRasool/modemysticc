
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { HashRouter } from 'react-router-dom';

// Find the root DOM element where the React app will be mounted.
const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

// Create a React root for the main DOM element.
const root = ReactDOM.createRoot(rootElement);

// Render the application within the root.
// React.StrictMode is a wrapper that checks for potential problems in an app during development.
// HashRouter is used for routing, using the URL hash to keep the UI in sync with the URL.
root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
