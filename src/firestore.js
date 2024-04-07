import { addDoc, collection, doc, getDocs, setDoc } from "firebase/firestore";
import { db } from "./firebaseInit"
const ref = collection(db, "photoPholio");

export const addAlbum = async (albumName) => {
    const docRef = doc(db, 'photoPholio', albumName);
    const data = {}; //inititally no data only add al 
    setDoc(docRef, data)
        .then(() => {
            console.log('Album Added Success');
        })
        .catch((error) => {
            console.error('Error writing document:', error);
        });
}
export const removeAlbum = async (albumName) => {

}
export const getallAlbums = async () => {
    
    const querySnapshot = await getDocs(ref);
    const data = [];
    querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
    });
    return data;
}
export const getImages = async (albumName) => {

}
export const addImage = async (albumName) => {

}
export const removerImage = async (imageId) => {

}
