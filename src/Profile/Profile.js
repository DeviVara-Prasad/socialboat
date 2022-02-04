import axios from 'axios';
import React from 'react';
import Content from './Content';
import SearchAppBar from './SearchAppBar';
const Profile = () =>{
    const [searchText,setSearchText] = React.useState("a");
    const [profileData,setProfileData] = React.useState({});
    //console.log(searchText);
    React.useEffect(()=>{
            let uid = "Prasad1729";
            axios.get(`https://asia-south1-socialboat-dev.cloudfunctions.net/assignmentGet?uid=${uid}`).then(
                ({data}) =>{
                    setProfileData(data.profile);
                }
            )
    },[])
    return (
        <div>
        <SearchAppBar searchText={searchText} onChange={setSearchText} profileData={profileData}/>
        <Content searchText={searchText} profileData={profileData}/>
        </div>
    );

}
export default Profile;