import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '~/provider/ThemeContext';

import Main from './app/Main';
import './index.css';

const App = () => (
  <React.StrictMode>
    <ThemeProvider>
      <Main />
    </ThemeProvider>
  </React.StrictMode>
);
const rootElement = document.getElementById('app');
if (!rootElement) throw new Error('Failed to find the root element');

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(<App />);
