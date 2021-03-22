import { Button } from '@material-ui/core'
import React, {useState } from 'react'
import "./PostBox.css"
import db from './firebase'

function PostBox() {
    const [postMessage, setPostMessage] = useState('');
    const sendPost = e => {
        e.preventDefault();

        db.collection('posts').add({
            username: 'marbienjimeno',
            text: postMessage,
            likes: 0
        })

        setPostMessage("");
    }
    return (
        <div className="postBox">
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
