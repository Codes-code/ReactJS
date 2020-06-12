import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

//for initialization
const firebaseConfig = {
  apiKey: "AIzaSyDZ3Ler_XyTVKN6kQjJoxe81eezvIxsgU4",
  authDomain: "fireauth-8c520.firebaseapp.com",
  databaseURL: "https://fireauth-8c520.firebaseio.com",
  projectId: "fireauth-8c520",
  storageBucket: "fireauth-8c520.appspot.com",
  messagingSenderId: "84476783770",
  appId: "1:84476783770:web:d8cf8161a793e2db764323",
  measurementId: "G-90ZXTW9EJJ"
};
firebase.initializeApp(firebaseConfig);


//for google sign in
const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
  //alternate possiblity--- auth.signInWithRedirect(provider);
};



//we check if user of this UID exists, if yes then we fetch info, if not then we save his/her info.
export const generateUserDocument = async (user, additionalData) => {

  if (!user) return;

  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get(); //If user of this uid exists then snapshot will exist

  if (!snapshot.exists) {//if user does not exist, then we set his information
    const { email, displayName, photoURL } = user;
    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        ...additionalData
      });
    } catch (error) {
        console.error("Error creating user document", error);
    }
  }
  return getUserDocument(user.uid);//now we return pre-existing info or the information we just saved. 
};

const getUserDocument = async uid => {// for fetching the user info
  if (!uid) return null;
  try {
    const userDocument = await firestore.doc(`users/${uid}`).get();
    return {
      uid,
      ...userDocument.data()
    };
  } catch (error) {
    console.error("Error fetching user", error);
  }
};






export const auth = firebase.auth();
export const firestore = firebase.firestore();