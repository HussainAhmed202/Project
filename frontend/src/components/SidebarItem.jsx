import { useState } from "react"

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
            <a href={item.path || "#"} className="sidebar-item plain">
                { item.icon && <i className={item.icon}></i> }
                {item.title}
            </a>
        )
    }
}