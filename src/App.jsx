import './App.css'
import MultiSelectDropDown from "./DropDown/MultiSelectDropDown"
import MyDateTimePicker from "./DateTimePicker/MyDateTimePicker"

import CreateMenu from "./MenuRecursive/test"

import { Route, Routes } from 'react-router-dom'; //for Routing

import PaginatedTable from "./Table/PaginatedTable"


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<h2>Dashboard /dropdown /datetimepicker /paginatedtable</h2>} />
      <Route path="/dropdown" element={<MultiSelectDropDown />} />
      <Route path="/datetimepicker" element={<MyDateTimePicker />} />
      <Route path="/paginatedtable" element={<PaginatedTable />} />
      <Route path="/menu" element={<CreateMenu />} />

    </Routes>
  )
}

//      // <Route path="/" element={<App />} />
