import { Checkbox, IconButton } from "@mui/material";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RedoIcon from '@mui/icons-material/Redo';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import React from "react";
import "./EmailList.css";

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
      </div>
    </div>
  );
}

export default EmailList;
