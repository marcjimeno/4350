import React, { useRef } from 'react';
import { Dialog, DialogContent, DialogContentText } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core'
import db from './firebase'

export default function User(){
    const [open, setOpen] = React.useState(true);

    const textRef = useRef();
    const showRefContent = () => {
        console.log(textRef.current.value);
    };

    const handleClose = () => {
      setOpen(false);

    };
    return(
        <div>
            <Dialog open={open} onClose={showRefContent} aria-labelledby="form-dialog-title">
                <DialogContent>
                    <DialogContentText>
                        Please Enter A Username
                    </DialogContentText>
                    <TextField
                        inputRef={textRef}
                        autoFocus
                        margin="dense"
                        id="username"
                        label="Username"
                        fullWidth
                    />
                    <Button type="submit" fullWidth variant="contained" color="primary" onClick={handleClose}>
                        Enter
                    </Button>
                </DialogContent>
            </Dialog>
        </div>
    )
}
