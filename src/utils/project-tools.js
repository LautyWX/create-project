import {collection, doc, addDoc, updateDoc, deleteDoc} from "firebase/firestore";
import db from "./firebase.js"

export const addNewProject = async (project) => {
    const collectionRef = collection(db,"project");
    await addDoc(collectionRef, project);
}
export const deleteProject = async (projectID) => {
    const docRef = doc(db,"project",projectID);
    await deleteDoc(docRef);
}

//edits

export const updateName = async (projectID,newName) => {
    const docRef = doc(db,"project",projectID);
    await updateDoc(docRef,{
        "name":newName
    })
}

export const updateDescription = async (projectID,newDescription) => {
    const docRef = doc(db,"project",projectID);
    await updateDoc(docRef,{
        "name":newDescription
    })
}

export const updateIcon = async (projectID,newIcon) => {
    const docRef = doc(db,"project",projectID);
    await updateDoc(docRef,{
        "name":newIcon
    })
}