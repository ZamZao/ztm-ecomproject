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
  
firebase.initializeApp(config);

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

export const addCollectionAndItems = async (collectionKey,objectsToAdd) =>{
    const collectionRef = firestore.collection(collectionKey);
    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef,obj);
    });
    return await batch.commit();
}

export const convertCollectionsSnapShotToMap = (collections) => {
    // console.log(collections.docs);
    const transformedCollections = collections.docs.map(doc => {
        // const {title,items} = doc.data();
        return {
            routeName: encodeURI(doc.data().title.toLowerCase()),
            id: doc.id,
            title: doc.data().title,
            items: doc.data().items
        }
    })
    return transformedCollections.reduce((accumulator,collection) =>{
        accumulator[collection.title.toLowerCase()]=collection;
        return accumulator;
    },{});
}

export const getCurrentUser = () => {
    return new Promise((resolve,reject) =>{
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            unsubscribe();
            resolve(userAuth);
        }, reject);
});
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
