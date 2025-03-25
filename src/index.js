import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Provider} from 'react-redux'
import store from './utils/redux/store/store';
import { persistor } from './utils/redux/store/store';
import { PersistGate } from 'redux-persist/integration/react';
import SingleVideo from './pages/single video/SingleVideo';
import GlobalStateProvider from './utils/context/GlobalStateProvider';
import History from './pages/history/History';
import {ToastContainer} from 'react-toastify';
import Profile from './pages/profile/Profile';
import Login from './pages/login/Login';
import SignupForm from './pages/signup/SignupForm';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <GlobalStateProvider>
    <Routes>
      <Route path="/" element={<App/>} />
      <Route path="/videos/:id" element={<SingleVideo/>} />
      <Route path="/videos/history" element={<History tab="History"/>}/>
      <Route path="/videos/like" element={<History tab="Like"/>}/>
      <Route path="/videos/watch-later" element={<History tab="watch-later"/>}/>
      <Route path="/videos/profile" element={<Profile/>}/>
      <Route path="/videos/login" element={<Login/>}/>
      <Route path="/videos/signup" element={<SignupForm/>}/>
    </Routes>
    </GlobalStateProvider>
    </PersistGate>
    </Provider>
    </BrowserRouter>
    <ToastContainer/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
