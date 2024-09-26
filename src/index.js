import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Test from './Test';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <>
    <App/>
    <Test/>
    </>
);

{/* Test function to get date and time on click */}

// getDateAndTime(); 

// function getDateAndTime() {
//     root.render(
//         <div>
//             <h2>Today is</h2>
//             <h3>{new Date().toLocaleDateString()}</h3>
//             <h2>Time:</h2>
//             <h3>{new Date().toLocaleTimeString()}</h3>
//             <button onClick={getDateAndTime}>Update date and time</button>
//         </div>
//    )
// }

// setInterval(getDateAndTime, 1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
