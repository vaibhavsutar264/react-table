import React from 'react'
import './App.css'
import { BasicTable } from './components/BasicTable'
import { ColumnHiding } from './components/ColumnHiding'
import { ColumnOrder } from './components/ColumnOrder'
import { FiltertingTable } from './components/FiltertingTable'
import { PaginationTable } from './components/PaginationTable'
import { RowSelection } from './components/RowSelection'
import { SortingTable } from './components/SortingTable'
import { StickyTable } from './components/StickyTable'
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<BasicTable/>}/>
        <Route path="/ColumnHiding" element={<ColumnHiding/>}/>
        <Route path="/ColumnOrder" element={<ColumnOrder/>}/>
        <Route path="/FiltertingTable" element={<FiltertingTable/>}/>
        <Route path="/PaginationTable" element={<PaginationTable/>}/>
        <Route path="/RowSelection" element={<RowSelection/>}/>
        <Route path="/SortingTable" element={<SortingTable/>}/>
        <Route path="/StickyTable" element={<StickyTable/>}/>
        {/* <Route path="/account/signup" element={<Signup/>}/> */}
      </Routes>
    </div>
  )
}

export default App
