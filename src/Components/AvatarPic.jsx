import React from 'react'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

import ProfilePicture from '../assets/Images/PNGTuber Profile Picture.jpg'
const AvatarPic = () =>{
    return (
        <div>
          <Stack direction="row" spacing={2}>
            <Avatar sx={{width: 120, height: 120}}alt="Dao" src={ProfilePicture}/>
          </Stack>
        </div>
    )
}

export default AvatarPic