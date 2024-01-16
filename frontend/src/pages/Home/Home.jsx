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
         </div>
    </>
  )
};