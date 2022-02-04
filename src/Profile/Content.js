import React,{useEffect,useState} from 'react';
import axios from 'axios';
import VideoCard from './VideoCard';
import { Box } from '@mui/material';
import {Chip} from '@mui/material';
import {Card} from '@mui/material';
import ProfileDetails from './ProfileDetails';
const Content = ({searchText,profileData}) =>{
    const [result,updateResult] = useState([]);
    const [loading,setLoading] = useState(false);
    const [numResults,setNumResults] = useState(5)
    useEffect(
        ()=>{
            setLoading(true);
            axios.get(`https://asia-south1-socialboat-dev.cloudfunctions.net/assignmentVideos?q=${searchText}&numResults=${numResults}`).then(
                ({data}) => {
                    console.log(data.results);
                    updateResult(data.results);
                    }
            ).finally(()=>
            {    
                console.log("finally");
                setLoading(false);
            })
            
        }
    ,[searchText,numResults]);
    return (

        <div>
            <div><ProfileDetails profileData={profileData}/></div>
            <Box 
            sx={
                {
                    display: "flex",
                    
                    flexDirection: 'row',
                    flexWrap: "wrap"
                }
            }
            >{
                !loading? result.map(
                    (el)=> <VideoCard video={el}/>
                ): "Loading"
                
                }
                <Card sx={{ maxWidth: 387, px: ".5rem",m: ".5rem", display: 'flex', justifyContent:'center',alignItems:'center' }}>
                <Chip label="Load more" color="primary" onClick={()=>{
                    setNumResults((numResults)=>numResults+10)
                }}/></Card>
                </Box>
        </div>
    );
}
export default Content;