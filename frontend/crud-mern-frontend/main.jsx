import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import App from './src/App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import '/style.css'

createRoot(document.querySelector('#app')).render(
    <StrictMode>
        <App/>
    </StrictMode>
)