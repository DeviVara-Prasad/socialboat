import React from 'react';
const Login = ()=>{
    const [uid,setUid] = React.useState("");
    return <div>Username: <input type="text" id="uid" value={uid} onChange={(e)=>{setUid(e.target.value)}}/>
    <button onClick={()=>{
        let uid1 = uid;
        if(uid1==="Prasad1729"){
            window.localStorage.setItem("uid",uid1);
            window.location.href = '/'
        }
    }}>Login</button>
    </div>
}
export default Login;