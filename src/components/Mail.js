import { ArrowBack, CheckCircle, Delete, Email, Error, ExitToApp, MoveToInbox, Print, UnfoldMore, WatchLater } from '@mui/icons-material';
import LabelImportant from '@mui/icons-material/LabelImportant';
import MoreVert from '@mui/icons-material/MoreVert';
import { IconButton } from '@mui/material';
import React from 'react';
import "./Mail.css"
import { useNavigate } from "react-router-dom"

function Mail() {
    const navigate = useNavigate();
    return (
        <div className='mail'>
            <div className="mail__tools">
                <div className="mail__tools--left"> 
                <IconButton onClick={() => navigate("/")}>
                    <ArrowBack />
                </IconButton>

                <IconButton>
                    <MoveToInbox />
                </IconButton>

                <IconButton>
                    <Error />
                </IconButton>

                <IconButton>
                    <Delete />
                </IconButton>

                <IconButton>
                    <Email />
                </IconButton>

                <IconButton>
                    <WatchLater />
                </IconButton>

                <IconButton>
                    <CheckCircle />
                </IconButton>

                <IconButton>
                    <LabelImportant />
                </IconButton>

                <IconButton>
                    <MoreVert />
                </IconButton>

                </div>
                <div className="mail__tools--right">

                <IconButton>
                    <UnfoldMore />
                </IconButton>

                <IconButton>
                    <Print />
                </IconButton>

                <IconButton>
                    <ExitToApp />
                </IconButton>

                </div>
            </div>
            <div className="mail__body">
                <div className="mail__body--header">
                    <h2>Subject</h2>
                    <LabelImportant className="mail__body--important"/>
                    <p>Title</p>
                    <p className="mail__body--time">Time</p>
                    
                </div>
                <div className="mail__body--message">
                    <p>A message</p>
                </div>
            </div>
        </div>
    )
}

export default Mail;
