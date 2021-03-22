import React, { forwardRef } from 'react'
import "./Post.css"
import FavoriteOutlinedIcon from '@material-ui/icons/FavoriteOutlined'

const Post = forwardRef(
    ({ username, text, likes }, ref) => {
        return (
            <div className="post" ref={ref}>
                <div className="post__body">
                    <div className="post__header">
                        <div className="post__headerText">
                            <h3>
                                @{username}
                            </h3>
                            <h5>

                            </h5>
                        </div>
                        <div className="post__headerDescription">
                            <p>{text}</p>
                        </div>
                    </div> 
                    <div className="post__footer">
                        <span className="post__likes">
                        <FavoriteOutlinedIcon fontSize="small"/>{likes}
                        </span>
                    </div>  
                </div>
            </div>
        );
    }
);

export default Post
