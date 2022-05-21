import React from "react";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AppsIcon from "@mui/icons-material/Apps";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../features/userSlice";
import { auth } from "../firebase-config";

const Header = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(logout());
    });
  }

  return (
    <div className="header__container">
      <div className="header__left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          className="header__left--img"
          src="https://i.pinimg.com/originals/ae/47/fa/ae47fa9a8fd263aa364018517020552d.png"
          alt=""
        />
      </div>
      <div className="header__middle">
        <SearchIcon />
        <input
          className="header__middle--searchbar"
          placeholder="Search mail"
          type="text"
        />
        <ArrowDropDownIcon className="header__middle--dropdown" />
      </div>
      <div className="header__right">
        <IconButton>
          <HelpOutlineIcon />
        </IconButton>
        <IconButton>
          <SettingsIcon />
        </IconButton>
        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <AccountCircleIcon onClick={signOut} src={user.photoURL} />
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
