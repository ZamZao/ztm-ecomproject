import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config =  {
    apiKey: "AIzaSyCw-4zb29WNkhmgJsEKKxdKxWrHQ-edDho",
    authDomain: "crownecomproject.firebaseapp.com",
    projectId: "crownecomproject",
    storageBucket: "crownecomproject.appspot.com",
    messagingSenderId: "728927113246",
    appId: "1:728927113246:web:3018a0426bce321edb9e0f"
  }

export const createUserProfileDocument = async (userAuth,additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot =  await userRef.get();
    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {

            await userRef.set ({
                displayName,
                email,
                createdAt,
                ...additionalData
            })

        } catch (error) {
            console.log('error creating user', error.message)

        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
