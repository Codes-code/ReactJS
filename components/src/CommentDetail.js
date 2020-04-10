import React from 'react';
import faker from 'faker';

const CommentDetail = () => {
    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar" src={faker.image.avatar()}/>
            </a>
            <div className="content">   
                <a href="/" className="author">
                    Joe bonamassa
                </a>
                <div className="metadata">
                    <span className="date">
                        Today at 6:00 PM
                    </span>  
                </div>
                <div className="text">
                    Nice blog post
                </div> 
            </div>
        </div>
    )
}

//to export, make this file available to outside files
export default CommentDetail; 