import { useEffect, useState } from "react";
import styles from "./ProjectsPage.module.css";
import { ProjectData } from "@/lib/firebase/Interfaces";
import {Laptop2Icon} from 'lucide-react';
import axios from "axios";
import ProjectFeed from "@/components/Projects/ProjectFeed";
import ProjectModal from "./ProjectModal";

interface ProjectsPageProps{
    onOpenModal: (project: ProjectData) => void;
}
export default function ProjectsPage({onOpenModal}: ProjectsPageProps){
    const[projectData, setProjectData] = useState<ProjectData[] | null>(null);
    const[projectType, setProjectType] = useState<string>("");
    const[isOpeningModal, setIsOpeningModal] = useState(false);
    const[modalProject, setModalProject] = useState<ProjectData | null>(null);

    const[isGlowing, setIsGlowing] = useState(false);
    
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

    const handleModalOpen = (project: ProjectData) => {
        setModalProject(project)
        setIsOpeningModal(true)
        console.log("is modal open: ", isOpeningModal);

    }

    const handleModalClose = () => {
        setIsOpeningModal(false);
        setModalProject(null);
    }

    return (
        <section id='projects' className={styles.projectPageContainer}>
            <div className={styles.projectsWrapper}>
                <header className={styles.projectsHeader}>
                    <h1>Projects</h1>
                    <Laptop2Icon 
                        size={40}
                        className={`${styles.projectsHeaderIcon} ${isGlowing ? styles.glowing : ''}`}
                        onClick={() => {setIsGlowing(!isGlowing)}}
                    />
                    {isGlowing && (
                        <p 
                            className={styles.laptopText}
                            onClick={() => {setIsGlowing(!isGlowing)}}
                        >
                            Hi
                        </p>
                    )}

                </header>
                {projectData && (
                    <div className={styles.feedWrapper}>
                        <ProjectFeed 
                            projectData={projectData}
                            onSwitchType={handleProjectTypeSwitch}
                            onOpenModal={onOpenModal}
                        />
                    </div>
                )}
            </div>
            {/* {isOpeningModal && modalProject &&(
                <ProjectModal
                    projectData={modalProject}
                    onOpen={handleModalOpen}
                    onClose={handleModalClose} 
                />
            )} */}

        </section>
    )
}