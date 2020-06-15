import React from 'react';
import "../css/Note.css";
import NoteItem from "./NoteItem";


const Note = (props) => {

    /*
    const Temp = () => {
        Array.apply(null, { length: props.number }).map((e, i) => (
            <span key={i}>
                <NoteItem type={props.li}/>
            </span>
        ));
    }       


    let card = [];
    _.times(props.number, (i) => {
        card.push(
            <span key={i}>
                <NoteItem type={props.li}/>
            </span>
        );
    }
    */
    
    return(
        <div className='actual-note'>

            <NoteItem type={props.li}/>
            

        </div>
    );

}

{/*
let card = [];
            _.times(8, (i) => {
                card.push(<span key={i}>♦</span>);
            }
            );*/}

export default Note;