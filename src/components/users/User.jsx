import React from 'react';
import styles from './users.module.css';
import userPhoto from '../../assets/images/user.png';
import {NavLink} from 'react-router-dom';
import { usersAPI } from '../../api/api';
import Paginator from '../common/paginator/Paginator';

let User = ({user, followingInProgress, unfollow, follow}) => {
    
    return (
        
         <div>
            <span>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                    <img src={user.photos.small !=null ? user.photos.small : userPhoto} className={styles.userPhoto} />
                    </NavLink>
                </div>
                <div>
                    {user.followed ? 
                        <button disabled={followingInProgress.some(id => id=== user.id)} 
                                onClick={() => {unfollow(user.id)}}>
                            UNFOLLOW
                        </button> : 
                        <button disabled={followingInProgress.some(id => id === user.id)} 
                                onClick={() => {follow(user.id)}}>
                            FOLLOW
                        </button>
                    }
                    
                </div>
            </span>
            <span>
                <span>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </span>
                <span>
                    <div>{"user.location.country"}</div>
                    <div>{"user.location.city"}</div>
                </span>
            </span>
        </div>
    )
       
    
}

export default User;