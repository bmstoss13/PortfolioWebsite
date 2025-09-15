import { useEffect, useState } from "react";
import styles from "./ProjectsPage.module.css";
import { ProjectData } from "@/lib/firebase/Interfaces";
import { Laptop2Icon } from 'lucide-react';
import axios from "axios";
import ProjectFeed from "@/components/Projects/ProjectFeed";

interface ProjectsPageProps {
    onOpenModal: (project: ProjectData) => void;
}

export default function ProjectsPage({ onOpenModal }: ProjectsPageProps) {
    const [originalProjectData, setOriginalProjectData] = useState<ProjectData[] | null>(null);
    const [displayedProjects, setDisplayedProjects] = useState<ProjectData[] | null>(null);
    const [projectType, setProjectType] = useState<string>("software"); // Initialize with "software"


    const[isGlowing, setIsGlowing] = useState(false);
    const projectTypes = new Set(["software", "ui/ux", "ds/ml"]);

    const fetchProjectData = async () => {
        try {
            const url = '/api/projects';
            const { data } = await axios.get(url);
            
            setOriginalProjectData(data.data);
            setDisplayedProjects(data.data.filter((project: ProjectData) => project.type === "software"));
            setProjectType("software"); // Ensure state is correctly set
        } catch (err: any) {
            console.error("An error occurred while fetching project data: ", err);
        }
    };

    useEffect(() => {
        fetchProjectData();
    }, []);

    const handleProjectTypeSwitch = (type: string) => {
        if (originalProjectData && projectTypes.has(type)) {
            const filteredData = originalProjectData.filter(
                (project: ProjectData) => project.type === type
            );
            console.log(type)
            setDisplayedProjects(filteredData);
            setProjectType(type); // Update the active type state
        }
    };

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
                <div className={styles.projectTypeButtons}>
                    {Array.from(projectTypes).map((type) => (
                        <button
                            key={type}
                            className={`${styles.projectTypeButton} ${projectType === type ? styles.activeButton : ''}`}
                            onClick={() => handleProjectTypeSwitch(type)}
                        >
                            {type.toUpperCase()}
                        </button>
                    ))}
                </div>

                {displayedProjects && (
                    <div className={styles.feedWrapper}>
                        <ProjectFeed 
                            projectData={displayedProjects}
                            onOpenModal={onOpenModal}
                        />
                    </div>
                )}
            </div>
        </section>
    );
}