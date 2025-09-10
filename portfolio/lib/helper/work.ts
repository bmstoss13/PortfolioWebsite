import { db } from "../firebase/firebaseUtils";
import { getDocs, getDoc, collection, doc } from "firebase/firestore";
import { WorkData } from "../firebase/Interfaces";
import { workExperience } from "../firebase/collections";

export async function getWorkExperienceFromDB(): Promise<WorkData[] | null>{
    try{
        const workDataCollection = collection(db, workExperience)
        const workSnapshot = await getDocs(workDataCollection)
        const workList: WorkData[] = workSnapshot.docs.map(doc => ({
            ...doc.data(),
            id: doc.id,
        } as WorkData));
        return workList;
    } catch (err: any) {
        console.error("an error occurred while retrieving work experience from firestore: ", err);
        throw new Error(err.message || "failed to retrieve work experience from firestore.");
    }
}