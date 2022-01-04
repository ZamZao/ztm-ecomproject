import {all, call, put, takeLatest} from 'redux-saga/effects';
import ShopActionTypes from './shop.types';
import { convertCollectionsSnapShotToMap, firestore } from '../../firebase/firebase.utils';

import {
    fetchCollectionSuccess,
    fetchCollectionFailure,
} from './shop.actions'


export function* fetchCollectionAsync(){
    
    try {
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get(); 
        const collectionsMap = yield call(convertCollectionsSnapShotToMap,snapshot);
        // yield console.log({collectionsMap});
        yield put(fetchCollectionSuccess(collectionsMap));
    } catch (error) {
        yield put(fetchCollectionFailure(error.message));
    }


    // collectionRef
    //     .get()
    //     .then(snapshot => {
    //         const collectionMap = convertCollectionsSnapShotToMap(snapshot);
    //         dispatch(fetchCollectionSuccess(collectionMap));
    // })
    // .catch(error => dispatch(fetchCollectionFailure(error.message)));

}

export function* fetchCollectionStart(){
    yield takeLatest(
        ShopActionTypes.FETCH_COLLECTIONS_START,
        fetchCollectionAsync 
        );
}

export function* shopSagas (){
    yield all([call(fetchCollectionStart)]);
}