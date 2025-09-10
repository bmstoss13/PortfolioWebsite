import { ProjectData } from '@/lib/firebase/Interfaces';
import styles from './ProjectCard.module.css';

interface ProjectCardProps{
    projectData: ProjectData;
}

const ProjectCard = ({projectData}: ProjectCardProps) => {
    return(
        <div className={styles.projectCardContainer}>
            {projectData && (
                <div>
                    {projectData.name}
                </div>
            )}
        </div>
    )
}

export default ProjectCard;