
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, query, where } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyCxskqky5WreXyp3MrzPHWYRrS3OuCawmo",
  authDomain: "reactteisseire.firebaseapp.com",
  projectId: "reactteisseire",
  storageBucket: "reactteisseire.appspot.com",
  messagingSenderId: "582212333426",
  appId: "1:582212333426:web:f88f9bf554947cf428b7eb"
};

const FirebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(FirebaseApp)

export async function getNftData () {
  const collectionRef = collection(db, "nfts")
  let results = await getDocs(collectionRef)
  let dataNfts = results.docs.map (doc => {
    return { id: doc.id, ...doc.data()}
  })
  return dataNfts
}

export async function getNftDetail(idParams) {
  const docRef = doc(db, "nfts", idParams)
  const docResult = await getDoc(docRef)

  return docResult.data()

}

export async function getNftByCategory(IdCategoryParams) {
  const collectionRef = collection(db, "nfts")
  const queryCat = query(collectionRef, where("category", "==", IdCategoryParams))

  let results = await getDocs(queryCat)
  let dataNfts = results.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    }
  })
  return dataNfts
}


export default FirebaseApp
