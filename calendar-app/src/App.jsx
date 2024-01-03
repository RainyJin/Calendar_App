import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LeftSideBar from './navigation/LeftSideBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Calendar from './navigation/pages/Calendar'
import Inbox from './navigation/pages/Inbox'
import LabContacts from './navigation/pages/LabContacts'
import ProjectFiles from './navigation/pages/ProjectFiles'
import NoMatch from './navigation/pages/NoMatch'

const drawerWidth = 240;

function App() {

  return (
    <>
      <LeftSideBar/>
      <Routes>
        <Route path="/Calendar" element={<Calendar drawerWidth={drawerWidth}/>} />
        <Route path="/Inbox" element={<Inbox drawerWidth={drawerWidth}/>} />
        <Route path="/LabContacts" element={<LabContacts drawerWidth={drawerWidth}/>} />
        <Route path="/ProjectFiles" element={<ProjectFiles drawerWidth={drawerWidth}/>} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  )
}

export default App
