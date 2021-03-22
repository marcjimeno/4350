import React from 'react'
import './Sidebar.css'
import SidebarOption from './SidebarOption'
import {Button} from '@material-ui/core'

function Sidebar() {
    return (
        <div className="sidebar">
            {/* SidebarOption */}
            <SidebarOption active text="Home Feed"/>
            <Button variant="outlined" className="sidebar__post" fullWidth>Post</Button>
        </div>
    )
}

export default Sidebar
