
import React, { useEffect, useState } from 'react';
import {Box,Button,Chip} from '@mui/material';
import TextField from '@mui/material/TextField';
import axios from 'axios';
export default function Edit(){
    const uid = localStorage.getItem("uid");
    const [name,setName] = useState("");
    const [age,setAge] = useState(0);
    const [img,setImg] = useState("");
    const [bio,setBio] = useState("");
    const [fb,setFb] = useState("");
    const [linkedIn,setLinkedIn] = useState("");
    const [instagram,setInstagram] = useState("");
    const [flag,setFlag] = useState(false);
    useEffect(()=>{
        if(flag){
            axios.post("https://asia-south1-socialboat-dev.cloudfunctions.net/assignmentPost",{
            "uid": uid,   
            "name": name,
                "age": parseInt(age),
                "img": img,
                "bio": bio,
                "fb": fb,
                "linkedIn": linkedIn,
                "instagram": instagram
            }).then((res)=>{
                if(res){
                    window.location.href="/";
                }
            })
        }
    },[flag])
    const handler= (e,handle) =>{
        if(e.target.value!=="" || e.target.value!==0)
         handle(e.target.value);
    }
    return (
        <Box sx={{
            display:"inline-flex",
            flexDirection:"column"
        }}>
        <Chip label="Edit Profile" component="h1" color="primary" sx={{display:"inline",alignSelf:"center"}} />
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap"
      }}
      noValidate
      autoComplete="off"
    >
        <TextField
          id="outlined-required"
          required
          label="Name"
          value = {name}
          onChange={
              (e)=> handler(e,setName)
          }
        />
        <TextField
          required
          id="outlined-disabled"
          label="Bio"
          value = {bio}
          onChange={
            (e)=> handler(e,setBio)
        }
        />
        <TextField
          id="outlined-password-input"
          label="Age"
          type="number"
          required
          value = {age}
          onChange={
            (e)=> handler(e,setAge)}
        />
        <TextField
          id="outlined-read-only-input"
          label="Instagram"
          required
          value = {instagram}
          onChange={
            (e)=> handler(e,setInstagram)}
        />
        <TextField
          id="outlined-number"
          label="Facebook"
          required
          value={fb}
          onChange={
            (e)=> handler(e,setFb)}
        />
        <TextField required id="outlined-search" label="Search field" label="Img Link" value={img} 
         onChange={
            (e)=> handler(e,setImg)}
        />
        <TextField
          required
          id="outlined-helperText"
          label="LinkedIn"
          value={linkedIn}
          onChange={
            (e)=> handler(e,setLinkedIn)}
        />
        <Box sx={{
            display: "flex"
        }}>
        <Button variant="contained" onClick={
           ()=> setFlag(!flag)
        }>Submit</Button>
        </Box>
    </Box>
    </Box>
    );
}