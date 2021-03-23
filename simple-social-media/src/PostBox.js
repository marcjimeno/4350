import { Button } from '@material-ui/core'
import React, {useState, useRef } from 'react'
import "./PostBox.css"
import db from './firebase'


import { Dialog, DialogContent, DialogContentText } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

function PostBox() {
    const [postMessage, setPostMessage] = useState('');
    const [username, setUsername] = useState('');
    const sendPost = e => {
        e.preventDefault();

    

        db.collection('posts').add({
            username: username,
            text: postMessage,
            likes: 0
        })

        setPostMessage("");
    }




    const [open, setOpen] = React.useState(true);

    const textRef = useRef();
    const showRefContent = () => {
        console.log(textRef.current.value);
    };

    const handleClose = () => {
      setOpen(false);
    }


    return (
        <div className="postBox">
            <Dialog open={open} onClose={showRefContent} aria-labelledby="form-dialog-title">
                <DialogContent>
                    <DialogContentText>
                        Please Enter A Username
                    </DialogContentText>
                        <input
                        onChange={(e) => setUsername(e.target.value)} 
                        value={username} 
                        placeholder="Username" 
                        type="text"/>
                    <Button type="submit" fullWidth variant="contained" color="primary" onClick={handleClose}>
                        Enter
                    </Button>
                </DialogContent>
            </Dialog>




            <form>
                <div className="postBox__input">
                    <input
                    onChange={(e) => setPostMessage(e.target.value)} 
                    value={postMessage} 
                    placeholder="What's on your mind?" 
                    type="text"/>
                </div>
                <Button onClick={sendPost} type="submit" className="postBox__postButton">Post</Button>
            </form>



        </div>

        
    )
}

export default PostBox
