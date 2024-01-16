import Signin from './pages/Signin/Signin.jsx'
import SignUp from './pages/SignUp/SignUp.jsx'
import Home from './pages/Home/Home.jsx'
import Password from './components/Password.jsx'

import AllProjectTable from './components/AllProjectTable.jsx'
import TrashProjectTable from './components/TrashProjectTable.jsx'
import ArchiveProjectTable from './components/ArchiveProjectTable.jsx'
import ChallengePage from './pages/Challenge/ChallengePage.jsx'

import { Routes, Route } from 'react-router-dom'
import Project from './pages/Projects/Project.jsx'
import Questions from './pages/Questions/Questions.jsx'
//import Editor from './components/Editor copy.jsx'

export default function App() {
    return (
    
        <Routes>
            <Route path="/" element={<Signin />} />
            <Route path="/signup" element={<SignUp />}/>
            <Route path="/change-password" element={<Password />}/>
            <Route path="/home" element={<Home />} /> 
            <Route path="/project/:projectID" element={<Project />} /> 
            <Route path="/home/challenges" element={<Questions />} /> 
            
        </Routes>
    )
}