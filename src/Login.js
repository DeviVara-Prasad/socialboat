import React from 'react';
import {Chip,TextField,Button} from '@mui/material';
import { Box } from '@mui/system';
const Login = ()=>{
    const [uid,setUid] = React.useState("");
    return <Box sx={{
        display: "flex",
        flexDirection:"column",
        justifyContent: "space-between"
    }}>
        <Chip label="Login Page" component="h1" color="primary" sx={{display:"inline",alignSelf:"center", m:"0.5rem"}} />
        <TextField
          id="outlined-required"
          required
          label="User_Id"
          value = {uid}
          onChange={
            (e)=>{setUid(e.target.value)
          }}
          sx={{display:"inline",alignSelf:"center"}}
        />
    <Button variant="contained" onClick={
           ()=> {
            let uid1 = uid;
            if(uid1==="Prasad1729"){
                window.localStorage.setItem("uid",uid1);
                window.location.href = '/'
            }
           }
        } sx={{display:"inline",alignSelf:"center", m:"0.5rem"}}>Login</Button>
        
    </Box>
}
export default Login;