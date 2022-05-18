import { Checkbox, IconButton } from "@mui/material";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RedoIcon from '@mui/icons-material/Redo';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardHideIcon from '@mui/icons-material/KeyboardHide';
import Settings from "@mui/icons-material/Settings";
import React from "react";
import "./EmailList.css";
import Section from "./Section"
import InboxIcon from '@mui/icons-material/Inbox';
import PeopleIcon from '@mui/icons-material/People';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import EmailRow from "./EmailRow"


function EmailList() {
  return (
    <div className="emailList">
      <div className="emailList__settings">
        <div className="emailList__settings--left">
            <Checkbox />
           <IconButton>
               <ArrowDropDownIcon />
           </IconButton>
           <IconButton>
               <RedoIcon />
           </IconButton>
           <IconButton>
               <MoreVertIcon />
           </IconButton>
        </div>
        <div className="emailList__settings--right">
           <IconButton>
               <KeyboardArrowLeftIcon />
           </IconButton>
           <IconButton>
               <KeyboardArrowRightIcon />
           </IconButton>
           <IconButton>
               <KeyboardHideIcon />
           </IconButton>
           <IconButton>
               <Settings />
           </IconButton>
        </div>
      </div>
      <div className="emailList__sections">
          <Section Icon={InboxIcon} title="Primary" color="red" selected />
          <Section Icon={PeopleIcon} title="Social" color="#1A73E8" />
          <Section Icon={LocalOfferIcon} title="Promotions" color="green" />
      </div>
      <div className="emailList__list">
          <EmailRow
          title="Twitch"
          subject="Hey fellow streamer!!!"
          description="This is a test"
          time="10pm"
          />
      </div>
      <div className="emailList__list">
          <EmailRow
          title="Twitch"
          subject="Hey fellow streamer!!!"
          description="This is a test test test test testttttttttttttttttt"
          time="10pm"
          />
      </div>
      
    </div>
  );
}

export default EmailList;
