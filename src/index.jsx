/**
 * A component from React that can be wrapped around other components. We can use it for any component.
 * Executes every component function twice. Should only be used for development, !NOT FOR PRODUCTION!.
 */
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>
);
