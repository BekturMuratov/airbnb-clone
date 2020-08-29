import React from 'react';
import '../styles/Header.css';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SearchIcon from '@material-ui/icons/Search';
import {Avatar} from '@material-ui/core';

function Header(){
	return (
		<div className="header">
		<img
		className="header__icon"
		 src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/300px-Airbnb_Logo_B%C3%A9lo.svg.png" 
		 alt=""
		 />
		 <div className="header__center">
		 <input type="text" />
		 <SearchIcon />
		 </div>
		 <div className="header__right">
		 <p>Become host</p>
		 <LanguageIcon />
		 <ExpandMoreIcon />
		 <Avatar />
		 </div>
		</div>
		)
}


export default Header;
