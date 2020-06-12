import React, {useContext} from 'react';
import { Router } from "@reach/router";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import ProfilePage from "./ProfilePage";
import PasswordReset from "./PasswordReset";
import Header from "./Header";
import '../css/Application.css';
import { UserContext } from "./providers/UserProvider";

function Application() {

  const user = useContext(UserContext);

  console.log("--App Rendered--") 

  return (//by default it goes to router because of not being signed in. and in that, by default it goes to signin because of it's '/' path. 
        user ?
        <div className="Thanks Raja!">
          <Header lockprop="lock open" />
          <ProfilePage />
        </div>
      :
        <div>
          <Header lockprop="lock" />
          <Router>
            <SignUp path="SignUp" />
            <SignIn path="/" />
            <PasswordReset path = "PasswordReset" />
          </Router>
        </div>

  );
}

export default Application;

