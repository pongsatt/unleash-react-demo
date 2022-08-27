import FlagProvider from '@unleash/proxy-client-react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';

const config = {
  url: 'http://localhost:3000/proxy',
  clientKey: 'clientKey1',
  refreshInterval: 5,
  appName: 'MyReactApp'
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <FlagProvider config={config} >
    <App />
  </FlagProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
