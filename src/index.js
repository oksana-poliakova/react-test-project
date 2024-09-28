import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './pages/header/Header';
import Main from './pages/main/Main';
import Sidebar from './pages/sidebar/Sidebar';
import Footer from './pages/footer/Footer';
import './global.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
   <div className='container'>
        <Header/>
        <Main/>
        <Sidebar/>
        <Footer/>
   </div>
);


