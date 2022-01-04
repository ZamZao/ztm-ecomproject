import ShopActionTypes from "./shop.types";
import { convertCollectionsSnapShotToMap, firestore } from '../../firebase/firebase.utils';


export const fetchCollectionStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_START,
})

export const fetchCollectionSuccess = collectionsMap => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCES,
    payload: collectionsMap,
})

export const fetchCollectionFailure = errorMessage => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage,
})

export const fetchCollectionStartAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection('collections');
        dispatch(fetchCollectionStart());
        collectionRef.get().then(snapshot => {
            const collectionMap = convertCollectionsSnapShotToMap(snapshot);
            dispatch(fetchCollectionSuccess(collectionMap));
        }).catch(error => dispatch(fetchCollectionFailure(error.message)));

    }
} 