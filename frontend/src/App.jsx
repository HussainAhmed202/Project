import Signin from './pages/Signin/Signin.jsx'
import SignUp from './pages/SignUp/SignUp.jsx'
import Home from './pages/Home/Home.jsx'
import AllProjectTable from './components/AllProjectTable.jsx'
import TrashProjectTable from './components/TrashProjectTable.jsx'
import ArchiveProjectTable from './components/ArchiveProjectTable.jsx'
//import ChallengePage from './components/ChallengePage.jsx'
import ChallengePage from './pages/Challenge/ChallengePage2.jsx'




import { Routes, Route } from 'react-router-dom'
import Users from './components/fetch.jsx'
import CSRFToken from './components/csrftoken.jsx'
import Project from './pages/Projects/Project.jsx'
import Editor from './components/Editor copy.jsx'

export default function App() {
    return (

    
        <Routes>
            <Route path="/" element={<Signin />} />
            <Route path="/signup" element={<SignUp />}/>
            <Route path="/home" element={<Home />} /> 
            <Route path="/project/:projectID" element={<Project />} /> 
        </Routes>
    )
}