import AllProjectTable from "../../components/AllProjectTable";
import BrandExample from "../../components/Navbar"; 
import SearchBar from "../../components/SearchBar"; 
import Sidebar from '../../components/Sidebar'
import TrashProjectTable from "../../components/TrashProjectTable";
import ArchiveProjectTable from "../../components/ArchiveProjectTable";


export default function Home() {
    return (
    <>
        <BrandExample />
        <div className="main">
                <Sidebar />
                <div className="container">
                    <SearchBar />
                    <br />
                    <AllProjectTable />
                    <TrashProjectTable />
                    <ArchiveProjectTable/>    
                </div>
                
            {/* <div className="container">
            <h1 className="title">My React App</h1>
            <p className="info">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <button className="btn">Explore now</button>
             </div> */}
         </div>
    </>
  )
};