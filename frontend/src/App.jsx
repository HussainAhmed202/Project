import Signin from './components/Signin.jsx'
import SignUp from './components/SignUp.jsx'
import Home from './components/Home.jsx'
import AllProjectTable from './components/AllProjectTable.jsx'
import TrashProjectTable from './components/TrashProjectTable.jsx'
import ArchiveProjectTable from './components/ArchiveProjectTable.jsx'
import Home2 from './components/home2.jsx'
//import ChallengePage from './components/ChallengePage.jsx'
import ChallengePage from './components/ChallengePage2.jsx'




import { Routes, Route } from 'react-router-dom'

export default function App() {
    return (
        <ChallengePage/>
        // <Routes>
        //     <Route path="/" element={<Signin />} />
        //     <Route path="/signup" element={<SignUp />}/>
        //     <Route path="/home" element={<Home />} />           
        // </Routes>
    )
}