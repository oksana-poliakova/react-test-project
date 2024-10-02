import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './pages/header/Header';
import Main from './pages/main/Main';
import Sidebar from './pages/sidebar/Sidebar';
import Footer from './pages/footer/Footer';
import Hooks from './pages/hooks/Hooks';
import About from './pages/about/About';
import Community from './pages/community/Community';
import Resources from './pages/resources/Resources';
import Welcome from './pages/welcome/Welcome';
import StateHook from './pages/stateHook/StateHook';
import {
   createBrowserRouter,
   createRoutesFromElements,
   RouterProvider,
   Route,
   Outlet
} from 'react-router-dom';
import './global.css';

const Root = () => {
   return (
      <div className='container'>
      <Header/>
      <Main/>
      <Sidebar/>
      <Footer/>
   </div>
   );
}

const router = createBrowserRouter(
   createRoutesFromElements(
      <Route path='/' element={ <Root/> }>
         <Route index element={ <Welcome/> }/>
      </Route>
   )
);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
   <Root/>
);
