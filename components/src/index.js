import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

const App=()=> {
    return (
        <div className="ui container comments">
            <div className="comment">
                
                    <img alt="avatar" src={faker.image.avatar()}/>
                
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
        </div>
    );
};

//ReactDOM.render(*Render what, render where*)
ReactDOM.render(<App />, document.querySelector('#root'));