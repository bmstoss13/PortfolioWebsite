import { ProjectData } from '@/lib/firebase/Interfaces';
import styles from './ProjectCard.module.css';
import Image from 'next/image';
import { skillIcons } from '@/lib/skillIcons';

interface ProjectCardProps{
    projectData: ProjectData;
}

const ProjectCard = ({projectData}: ProjectCardProps) => {
    const renderSkills = (skills?: string[]) => {
    if (!skills) return null;
    return (
            <>
                {skills.map((skill) =>
                    skillIcons[skill] ? (
                        <div key={skill} className={styles.skillIcon}>
                            <Image
                                src={skillIcons[skill]}
                                alt={skill}
                                width={30}
                                height={30}
                            />
                        </div>
                    ) : null // nothing rendered if no icon
                )}
            </>
        );
    };
    return(
        <div className={styles.projectCardContainer}>
            {projectData && (
                <main className={styles.projectCardContent}>
                    <div className={styles.projectImageWrapper}>
                        <Image
                            src={projectData.photoURL || ''}
                            alt={'project photo'}
                            fill
                            className={styles.projectImage}
                        />
                        {projectData.date && (
                            <span className={styles.projectCardDate}>{projectData.date}</span>
                        )}
                    </div>
                    <h2>{projectData.name}</h2>
                    <p>{projectData.description?.substring(0, 120)}...</p>

                    <div className={styles.iconContainer}>
                        {renderSkills(projectData.skills.languages)}
                        {renderSkills(projectData.skills.frameworks)}
                        {renderSkills(projectData.skills.databases)}
                        {renderSkills(projectData.skills.tools)}
                    </div>
                </main>
            )}
        </div>
    )
}

export default ProjectCard;