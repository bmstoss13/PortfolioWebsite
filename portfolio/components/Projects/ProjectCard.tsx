import { ProjectData } from '@/lib/firebase/Interfaces';
import styles from './ProjectCard.module.css';
import Image from 'next/image';
import { skillIcons } from '@/lib/skillIcons';
import { useState, useRef, useEffect } from 'react';

interface ProjectCardProps {
    projectData: ProjectData;
    onOpenModal: (projectData: ProjectData) => void;
}

const ProjectCard = ({ onOpenModal, projectData }: ProjectCardProps) => {
    const [isHovering, setIsHovering] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

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
                    ) : null
                )}
            </>
        );
    };

    return (
        <div
            className={styles.projectCardContainer}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onClick={() => onOpenModal(projectData)}
        >
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
                        <div
                            ref={scrollRef}
                            className={`${styles.scrollWrapper} ${isHovering ? styles.scrollAnimation : ''}`}
                        >

                            <div className={styles.skillRow}>
                                {renderSkills(projectData.skills.languages)}
                                {renderSkills(projectData.skills.frameworks)}
                                {renderSkills(projectData.skills.databases)}
                                {renderSkills(projectData.skills.tools)}
                            </div>

                            <div className={styles.skillRow}>
                                {renderSkills(projectData.skills.languages)}
                                {renderSkills(projectData.skills.frameworks)}
                                {renderSkills(projectData.skills.databases)}
                                {renderSkills(projectData.skills.tools)}
                            </div>
                        </div>
                    </div>
                </main>
            )}
        </div>
    );
};

export default ProjectCard;
