import * as React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Router } from 'react-router-dom';
import App from './components/App';
import './styles/styles.scss';

render(<App />, document.getElementById('app'));