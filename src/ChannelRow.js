import React from 'react'
import './ChannelRow.css';
import { Avatar } from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';
function ChannelRow( {image,
Channel,
verified,
subs,
noOfVideos,
description}) {
    return (
        <div className='channelRow'>
            <Avatar className="channelRow__logo"
            alt={Channel}
            src={image}/>
            <div className='channelRow__text'>
                <h4>{Channel}{verified && <VerifiedIcon/>} </h4>
                <p>
                    {subs} subsucribers * {noOfVideos} videos
                </p>
                <p>
                {description}
                </p>
            </div>
            </div>
    )
}

export default ChannelRow;
