import { useState } from "react"
import { Link } from "react-router-dom"

export default function SidebarItem({item}){
    const [open, setOpen] = useState(false)
    if (item.isButton) {
        return (
            <button className="sidebar-button" onClick={() => window.location.href = "/project"}>
                {item.title}
            </button>
        )
    }
    else{
        return (
            <Link to={item.path || "#"} className="sidebar-item plain">
                { item.icon && <i className={item.icon}></i> }
                {item.title}
            </Link>
        )
    }
}