import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css'; //For PaginatedTable Folder

import "bootstrap/dist/css/bootstrap.css";

//install first using npm install react-router-dom
import { BrowserRouter, Route, Routes } from 'react-router-dom'; //for Routing

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<App />}>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)