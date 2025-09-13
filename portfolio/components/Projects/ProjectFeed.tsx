import { ProjectData } from '@/lib/firebase/Interfaces';
import styles from './ProjectFeed.module.css';
import ProjectCard from './ProjectCard';

interface ProjectFeedProps{
    onSwitchType: (type: string) => void;
    projectData: ProjectData[];
    onOpenModal: (projectData: ProjectData) => void;
}

const ProjectFeed = ({onOpenModal, onSwitchType, projectData}:ProjectFeedProps) => {
    return(
        <div className={styles.projectFeedContainer}>
            <div className={styles.feedBody}>
                {projectData ? (
                    projectData.map((project) => {
                        return(
                            <ProjectCard
                                key={project.id}
                                projectData={project}
                                onOpenModal={onOpenModal}
                            />
                        )
                    })
                ) : (
                    null
                )}
            </div>

        </div>
    )
}

export default ProjectFeed;

