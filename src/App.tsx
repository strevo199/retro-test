import React from 'react'
import './App.css';
import { MainContent, SideBar } from './component';

function App() {
  return (
    <div  className=' bg-white p-10 flex  min-h-screen min-w-full '>
      <div className='flex flex-1 border-slate-100 border-t-2 '>
        <SideBar/>
        <MainContent/>
      </div>
    </div>
  )
}


export default App