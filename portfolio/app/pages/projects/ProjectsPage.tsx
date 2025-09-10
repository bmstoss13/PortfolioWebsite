import { useEffect, useState } from "react";
import styles from "./ProjectsPage.module.css";
import { ProjectData } from "@/lib/firebase/Interfaces";
import {Laptop2Icon} from 'lucide-react';
import axios from "axios";
import ProjectFeed from "@/components/Projects/ProjectFeed";

export default function ProjectsPage(){
    const[projectData, setProjectData] = useState<ProjectData[] | null>(null);
    const[projectType, setProjectType] = useState<string>("");
    
    const projectTypes = new Set(["software", "ds/ml"])
    const fetchProjectData = async() => {
        try{
            const url = '/api/projects'
            const { data } = await axios.get(url);

            setProjectData(data.data);
            setProjectType("software");

        } catch (err: any) {
            console.error("an error occurred while fetching project data: ", err);
        }
    }

    useEffect(() => {
        fetchProjectData()
    }, [])

    const handleProjectTypeSwitch = (type: string) => {
        try{
            if(!projectTypes.has(type)){
                setProjectType("software");
            }
            setProjectType(type);
        } catch (err: any) {
            console.error("an error occurred while swtiching project type: ", err);
        };
    };

    return (
        <section id='projects' className={styles.projectPageContainer}>
            <div className={styles.projectsWrapper}>
                <header className={styles.projectsHeader}>
                    <h1>Projects</h1>
                    <Laptop2Icon 
                        size={35}
                        className={styles.projectsHeaderIcon}
                    />
                </header>
                {projectData && (
                    <div className={styles.feedWrapper}>
                        <ProjectFeed 
                            projectData={projectData}
                            onSwitchType={handleProjectTypeSwitch}
                        />
                    </div>
                )}
            </div>



        </section>
    )
}