import { ArrowBack, CheckCircle, Delete, Email, Error, MoveToInbox, WatchLater } from '@mui/icons-material';
import LabelImportant from '@mui/icons-material/LabelImportant';
import MoreVert from '@mui/icons-material/MoreVert';
import { IconButton } from '@mui/material';
import React from 'react';
import "./Mail.css"

function Mail() {
    return (
        <div className='mail'>
            <div className="mail__tools">
                <div className="mail__tools--left">
                <IconButton>
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

                </div>
            </div>
            <h1>Mail Page</h1>
        </div>
    )
}

export default Mail;
