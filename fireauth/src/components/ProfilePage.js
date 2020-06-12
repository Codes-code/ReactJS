import React, { useContext } from "react";
import { UserContext } from "./providers/UserProvider";
import {auth} from "../authentication/firebase";
import Note from './Note';
import '../css/ProfilePage.css';
import Faker from 'faker';
import { Link } from "@reach/router";


const ProfilePage = () => {

    

    const user = useContext(UserContext);

        console.log('user');
        console.log(user);
        const {photoURL, displayName, email} = user;

        return (
        <div className = "mx-auto w-12/12 md:w-2/2 py-4 px-4 md:px-8">
            <div className="flex border flex-col items-center md:flex-row md:items-start border-blue-400 px-3 py-4">

                <div
                    style={{
                        background: `url(${photoURL || Faker.image.avatar()})  no-repeat center center`,
                        backgroundSize: "cover",
                        height: "200px",
                        width: "200px"
                    }}
                    className="border border-blue-300"
                >
                </div>

                <div className = "md:pl-4">
                    <h2 className = "text-2xl font-semibold">{displayName}</h2>
                    <h3 className = "italic">{email}</h3>
                </div>
            </div>

            <div className="note-list">
                    <div className="note-list-notes">
                        <Note />
                        <Note />
                        <Note />
                        <Note />
                        <Note />
                        <Note />
                        <Note />
                        <Note />
                        <Note />
                        <Note />
                    </div>    
            </div>

            <div class="flex content-center flex-wrap">
                <button className = "py-3 px-3 bg-red-600 mt-4 text-white rounded" onClick={ ()=>{auth.signOut()} }>
                    <Link to = "/">Sign Out</Link> 
                </button>
            </div>
        </div>
    ); 


}

export default ProfilePage;  
