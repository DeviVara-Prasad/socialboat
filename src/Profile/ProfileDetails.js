import React from 'react';
import {Typography} from '@mui/material';
import {CardMedia,Box,Avatar,Link} from '@mui/material';
import { textAlign } from '@mui/system';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon  from '@mui/icons-material/LinkedIn';
const ProfileDetails = ({profileData}) =>{
    return(
        <Box sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent:"center"
        }}>
        <Avatar
        height="20px"
        sx={
          {
            width:"25%",height:"25%",p:"0.5rem",
            alignItems: "flex-start"
          }
        }
        src={profileData.img}
        alt="green iguana"
      />
        <Box sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems:"center"
        }} >
        <Typography variant="h" component="h2" sx={{ m:"0.5rem", textAlign:"center"}}>
         {profileData.name}
         <br/>
         {profileData.bio}
         <br/>
         Age: {profileData.age}
      </Typography>
      <Typography variant="h" component="h2"sx={{ m:"0.5rem", textAlign: "center"}} >
         
         <Link href={profileData.instagram}><InstagramIcon sx={{width:"100%"}}>
         </InstagramIcon></Link>
      </Typography>
      <Typography variant="h" component="h2"sx={{ m:"0.5rem", textAlign: "center"}} >
         
         <Link href={profileData.fb}><FacebookIcon sx={{width:"100%"}}>
         </FacebookIcon></Link>

      </Typography>
      <Typography variant="h" component="h2"sx={{ m:"0.5rem", textAlign: "center"}} >
         
         <Link href={profileData.fb}><LinkedInIcon sx={{width:"100%"}}>
         </LinkedInIcon></Link>

      </Typography>
      </Box>  
      </Box>
    )
}
export default ProfileDetails