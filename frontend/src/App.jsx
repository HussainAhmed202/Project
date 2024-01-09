import Signin from './components/Signin.jsx'
import SignUp from './components/SignUp.jsx'
import Home from './components/Home.jsx'
import { Routes,Route } from 'react-router-dom'

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Signin />} />
            <Route path="/signup" element={<SignUp />}/>
            <Route path="/home" element={<Home />} />
            
            
            
        </Routes>
    )
}