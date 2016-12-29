import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';

import Home from './routes/Home';

const app = document.getElementById('app');

// Render the main component into the dom
ReactDOM.render(<Home />, app);
