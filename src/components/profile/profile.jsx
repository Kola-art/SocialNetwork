import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './profileInfo/profileinfo';

const Profile = (props) =>{
    
    return(
        <div>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} />    
            <MyPostsContainer />  
        </div>
    );
}
export default Profile;