import "../lib/config-firebase.js";
import {
    getAuth,
    getFirestore,
    collection,
    addDoc,
    getDocs,
    query,
    orderBy,
    deleteDoc,
    doc,
    updateDoc
} from 'https://www.gstatic.com/firebasejs/9.6.11/firebase-firestore.js';

const db = getFirestore();
export const auth = getAuth();

export async function addPosts(inputTitulo, inputPost, userEmail) {
    try {
        const ref = await addDoc(collection(db, 'posts'), {
            inputTitulo,
            inputPost,
            userEmail,
            date: new Date().toLocaleString('pt-br'),
            likes: [],
        });
        return ref.id;
    } catch (e) {
        return null;
    }
}

export const getPost = async () => {
    const arrayPosts = [];
    const queryFirestore = query(collection(db, 'post'), orderBy('date'));
    const allPosts = await getDocs(queryFirestore);
    allPosts.forEach((doc) => {
        const timeline = doc.data(); //ordenando por data
        arrayPosts.push({ ...timeline, id: doc.id });
    });
    return arrayPosts;
};




