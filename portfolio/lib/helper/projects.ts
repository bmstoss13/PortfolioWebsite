import { projects } from "../firebase/collections";
import { ProjectData } from "../firebase/Interfaces";
import { db } from "../firebase/firebaseUtils";
import { doc, getDocs, collection, query, orderBy } from "firebase/firestore";

export async function getAllProjectsFromDB():Promise<ProjectData[] | null> {
    try{
        const projectsDoc = query(collection(db, projects), orderBy("orderNumber"));
        const projectsSnapshot = await getDocs(projectsDoc);
        const projectsList: ProjectData[] = projectsSnapshot.docs.map(doc => ({
            ...doc.data(),
            id: doc.id
        } as ProjectData));
        return projectsList;
    } catch (err: any){
        console.error("an error occurred while fetching project data from firestore: ", err);
        throw new Error(err.message || "failed to fetch project data from firestore: ", err);
    };
};