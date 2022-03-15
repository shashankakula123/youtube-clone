import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import Avatar from '@mui/material/Avatar';
import {Link } from 'react-router-dom';
import './Header.css';
function Header() {

const [inputSearch,setInputSearch]=useState('');

    return (
        <div className='header'>

            <div className='header__left'>
<MenuIcon/>
<Link to="/">
<img className="header__logo" src="https://image.shutterstock.com/image-vector/kiev-ukraine-october-20-2021-260nw-2078819083.jpg" alt="youtube" />
</Link>
  </div>

<div className='header__input'>
  <input value={inputSearch} onChange={(e)=>{setInputSearch(e.target.value)}} placeholder='Search' type="text"/>
 
 <Link to={`/search/${inputSearch}`}>

  <SearchIcon className="header__inputbutton" />
</Link>
</div>

<div className='header__icons'>

  <VideoCallIcon className='header__icon'/>
  <AppsIcon className='header__icon'/>
  <NotificationsOutlinedIcon className='header__icon'/>
  <Avatar alt="elonmusk" src="https://i.dawn.com/primary/2017/03/58d9f89745239.jpg"/>
    </div>
        </div>
    )
}

export default Header
