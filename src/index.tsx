import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './nav/router';
import './style/index.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(<AppRouter />);
