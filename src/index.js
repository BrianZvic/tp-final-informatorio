import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import "./index.css"
import PagePrincipal from './Components/Pages/Principal';
import Error404 from './Components/Error404/error404';
import { Route, Routes,BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
        <Route index element={<PagePrincipal></PagePrincipal>}/>
        <Route path="*" element={<Error404></Error404>} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
/*


<React.StrictMode>
    <Error404></Error404>
  </React.StrictMode>

  */