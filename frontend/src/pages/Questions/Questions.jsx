import { useEffect } from "react";
import BrandExample from "../../components/Navbar";
import QuestionsSideBar from "../../components/QuestionsSideBar";
import YourMainComponent from "../../components/Card";


export default function Questions() {
     return (
        <>
    <BrandExample />
    <div className="main">
        <QuestionsSideBar />
        <div className="container back-color">
          <div>
            <div className="scrollableContainer">
              <YourMainComponent />
            </div>
          </div>
        </div>
      </div>
            </>
        
    )
}