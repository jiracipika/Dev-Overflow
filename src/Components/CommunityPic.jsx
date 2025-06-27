import React from 'react'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

import CommunityPicture from '../assets/Images/JavaScript-logo.png'
const CommunityPic = () =>{
    return (
        <div>
          <Stack direction="row" spacing={2}>
            <Avatar sx={{width: 100, height: 100}}alt="Community" src={CommunityPicture}/>
          </Stack>
        </div>
    )
}

export default CommunityPic