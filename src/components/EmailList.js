import { Checkbox, IconButton } from "@mui/material";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RedoIcon from '@mui/icons-material/Redo';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardHideIcon from '@mui/icons-material/KeyboardHide';
import Settings from "@mui/icons-material/Settings";
import React, { useEffect, useState } from "react";
import "./EmailList.css";
import Section from "./Section"
import InboxIcon from '@mui/icons-material/Inbox';
import PeopleIcon from '@mui/icons-material/People';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import EmailRow from "./EmailRow"

//Firebase
import { db } from "../firebase-config";
import { collection, getDocs } from "firebase/firestore";


function EmailList() {
    const [emails, setEmails] = useState([]);
    const emailsCollectionRef = collection(db,"emails")
    useEffect(() => {
        const getEmails = async () => {
            const data = await getDocs(emailsCollectionRef);
            setEmails(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
            console.log(data.docs)
        };
        getEmails();
    }, []);

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
          {emails.map((email) => (
              <EmailRow 
              id={email.id}
              key={email.id}
              title={email.to}
              subject={email.subject}
              description={email.message}
              time={email.timestamp}
              />
          ))}
      </div>
      
    </div>
  );
}

export default EmailList;
