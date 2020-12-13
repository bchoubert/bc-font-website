import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';

import App from './components/App/App';

import './index.scss';

ReactDOM.render(
    <StrictMode>
        <App />
    </StrictMode>,
    document.getElementById('root'),
);
