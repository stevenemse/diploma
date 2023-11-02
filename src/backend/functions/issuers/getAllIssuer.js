import {db} from '../../config/firebase';
import {collection,getDocs} from 'firebase/firestore';

export const getAllIssuer = async ()=> {
    const document = await getDocs(collection(db,"issuer"));
    const newDataBase = document.docs.map( (doc) => ( {
        ...doc.data(), id :doc.id}));

    return newDataBase;
}
