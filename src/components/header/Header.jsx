import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => {
    return (
    <header className={s.header}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTydtwp_xaRx2jO5IupZywcbd39ho5P9GqHLA&usqp=CAU"/>
      <div className={s.loginBlock}>
        {props.isAuth ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div> :
        <NavLink to={'/login'}>Login</NavLink>}
      </div>
   </header>
    );
}
 export default Header;