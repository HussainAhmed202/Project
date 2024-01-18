import { useState } from "react";

export default function QuestionsSideBarItem({ item}) {
  const [isChecked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!isChecked);
  };

  return (
    <div className={isChecked ? "sidebar-item checked" : "sidebar-item"}>
      <div className="sidebar-title" style={{color:"white"}}>
        {item.title}
        {item.childrens && <hr className="title-divider" />}
      </div>
      {item.childrens &&
        item.childrens.map((child, index) => (
          <div key={index} className="sidebar-child">
             <label className="checkbox-container">
        <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
        <span className="checkmark"></span>
      </label>
            <QuestionsSideBarItem item={child} />
          </div>
        ))}
    </div>
  );
}