import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App=()=> {
    return (
        <div className="ui container comments">
            <CommentDetail/>
        </div>
        );
    };

//ReactDOM.render(*Render what, render where*)
ReactDOM.render(<App />, document.querySelector('#root'));