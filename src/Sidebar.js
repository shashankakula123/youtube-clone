import React from 'react'
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import HomeIcon from '@mui/icons-material/Home';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
function Sidebar() {
    return (
        <div className='sidebar'>
                <SidebarRow selected={true}  Icon={HomeIcon} title="Home"/>
            <SidebarRow Icon={WhatshotIcon} title="Trending"/>
            <SidebarRow Icon={SubscriptionsIcon} title="Subscription"/>
        <hr/>
        <SidebarRow Icon={VideoLibraryIcon} title="Library"/>
            <SidebarRow Icon={HistoryIcon} title="History"/>
            <SidebarRow Icon={OndemandVideoIcon} title="Your videos"/>
            <SidebarRow Icon={WatchLaterIcon} title="Watch Later"/>
            <SidebarRow Icon={ThumbUpAltOutlinedIcon} title="Liked videos"/>
            <SidebarRow Icon={ExpandMoreOutlinedIcon} title="Show more"/>
            <hr/>
        </div>
    )
}

export default Sidebar;
