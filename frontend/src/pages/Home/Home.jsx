import AllProjectTable from "../../components/AllProjectTable";
import BrandExample from "../../components/Navbar"; 
import SearchBar from "../../components/SearchBar"; 
import Sidebar from '../../components/Sidebar'
import TrashProjectTable from "../../components/TrashProjectTable";
import ArchiveProjectTable from "../../components/ArchiveProjectTable";
import Popup from "../../components/Popup";
import SidebarItem from "../../components/SidebarItem";
import items from "../../data/sidebar.json";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import { Route, Routes, useNavigate } from "react-router-dom";
import Python from '../../components/Python.jsx'
import Java from '../../components/Java.jsx'
import C from '../../components/C.jsx'
import Cplus from '../../components/Cplus.jsx'


export default function Home({ Table, ...props }) {
  
  let navigate = useNavigate()
  console.log(window.location.pathname);
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };


  return ( 
    <>
      
      <Routes>
            <Route path="/python" element={<Python/>} />
            <Route path="/java" element={<Java />} />
            <Route path="/c" element={<C />} />
            <Route path="/cplus" element={<Cplus />} />
      </Routes>


        
      <BrandExample />
      <div className="main">
        <div className="sidebar">
          { items.map((item, index) => <SidebarItem key={index} item={item} />) }
        </div>
        <div className="container">
          <SearchBar />
          <br />
          <Table />
          {/* <button onClick={openModal}>Challenge</button>
          <Modal showModal={showModal} onClose={closeModal}/> 
        */}
          <button className="sidebar-button" onClick={(e) => {
            e.preventDefault;
            navigate('/challenges')
          }}>Challenges</button>
       
        </div>
     
     </div>
   </>
      
  )

};
