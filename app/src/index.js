import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/css/App.css';
import QuoteMachine from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<QuoteMachine />, document.getElementById('root'));
registerServiceWorker();
