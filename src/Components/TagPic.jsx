import React from 'react'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

import TagPicture from '../assets/Images/Javascript-logo.png'
const TagPic = () =>{
    return (
        <div>
          <Stack direction="row" spacing={2}>
            <Avatar sx={{width: 50, height: 50}}alt="Tag" src={TagPicture}/>
          </Stack>
        </div>
    )
}

export default TagPic