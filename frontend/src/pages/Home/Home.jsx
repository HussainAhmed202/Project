import AllProjectTable from "../../components/AllProjectTable";
import BrandExample from "../../components/Navbar"; 
import SearchBar from "../../components/SearchBar"; 
import Sidebar from '../../components/Sidebar'
import TrashProjectTable from "../../components/TrashProjectTable";
import ArchiveProjectTable from "../../components/ArchiveProjectTable";
import Popup from "../../components/Popup";
import langSelectPopup from "../../components/langSelect";
import SidebarItem from "../../components/SidebarItem";
import items from "../../data/sidebar.json";

export default function Home({Table, ...props}) {
  console.log(window.location.pathname);
  return ( 
    <>
      <BrandExample />
      <div className="main">
        <div className="sidebar">
          { items.map((item, index) => <SidebarItem key={index} item={item} />) }
        </div>
        <div className="container">
          <SearchBar />
          <br />
          <Table/>
          <langSelect/>
        </div>
       
     </div>
   </>
      
  )

};
