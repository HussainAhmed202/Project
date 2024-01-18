import Signin from './pages/Signin/Signin.jsx'
import SignUp from './pages/SignUp/SignUp.jsx'
import Home from './pages/Home/Home.jsx'
import Password from './components/Password.jsx'

import AllProjectTable from './components/AllProjectTable.jsx'
import TrashProjectTable from './components/TrashProjectTable.jsx'
import ArchiveProjectTable from './components/ArchiveProjectTable.jsx'
import ChallengePage from './pages/Challenge/ChallengePage.jsx'

import TestExample from './components/test.jsx'

import { Routes, Route } from 'react-router-dom'
import Project from './pages/Projects/Project.jsx'
import Questions from './pages/Questions/Questions.jsx'
import Agreement from './pages/SignUp/Agreement.jsx'
import Modal from './components/Modal.jsx'
//import Editor from './components/Editor copy.jsx'

export default function App() {
    return (
        

        
        <Routes>
            <Route path="/" element={<Signin />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/agreement" element={<Agreement />} />
            <Route path="/change-password" element={<Password />}/>
            <Route path="/home" element={<Home Table={AllProjectTable} />} /> 
            <Route path="/trash" element={<Home Table={TrashProjectTable}/>} /> 
            <Route path="/archive" element={<Home Table={ArchiveProjectTable}/>} /> 
            <Route path="/project" element={<Project />} /> 
            <Route path="/project/:projectID" element={<Project />} /> 
            <Route path="/challenges" element={<Questions />} />
            <Route path="/challenges/:questionID" element={<ChallengePage />} />
        </Routes>
            
    )
}