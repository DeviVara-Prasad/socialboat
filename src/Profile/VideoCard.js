import React from 'react';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import { CardContent } from '@mui/material';
import { Typography } from '@mui/material';
import {Chip} from '@mui/material';
const VideoCard = ({video}) =>{
     return ( 
     <Card sx={{ maxWidth: 387, px: ".5rem",m: ".5rem" }}>
     <CardMedia component='video' src={video.video} controls />
     <CardContent>
        <Typography variant="body2" color="text.secondary">{
            video.tags.map( (el)=>
            <Chip label={el} color="primary" sx={{m: "1px"}} />)
            }
        </Typography>
      </CardContent>
     </Card>
     )
      
}
export default VideoCard;