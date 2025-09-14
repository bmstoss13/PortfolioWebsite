import { ProjectData } from '@/lib/firebase/Interfaces';
import styles from './ProjectModal.module.css';
import { XIcon, Link } from 'lucide-react'
import Image from 'next/image';

interface ProjectModalProps{
    projectData: ProjectData;
    onClose: () => void;
}

export default function ProjectModal({projectData, onClose}: ProjectModalProps){
    const skillOrder = ['languages', 'frameworks', 'databases', 'tools'];

    return(
        <div className={styles.modalOverlay}>
            <div className={styles.modalContainer}>
                <header className={styles.modalHeader}>
                    <h1>{projectData.name}</h1>
                    <XIcon 
                        size={40} 
                        onClick={onClose}
                        className={styles.modalX}
                    />
                </header>
                <div className={styles.modalSubheader}>
                    <p>{projectData.role} | {projectData.date}</p>
                </div>
                <main className={styles.projectModalBody}>
                    <div className={styles.projectModalFirstRow}>
                        <div className={styles.modalImageWrapper}>
                            <Image 
                                src={projectData.photoURL || ''}
                                alt={`${projectData.name} photo`}
                                fill
                                className={styles.projectModalImage}
                            />
                        </div>

                        <div>
                            <div className={styles.projectModalDescription}>
                                {projectData.description}
                                
                            </div>
                            <div className={styles.modalLinkContainer}>
                                <h3>Relevant Links:</h3>
                                <div className={styles.modalLinks}>
                                    {projectData.repository && (
                                        <a
                                            href={projectData.repository}
                                            target="_blank"
                                            className={styles.modalLinkItemContainer}
                                        >
                                            <Image
                                                src={"/github-svgrepo-com.svg"}
                                                alt={'github link'}
                                                width={30}
                                                height={30}
                                                className={styles.modalLinkItem}
                                            />
                                        </a>
                                    )}

                                    {projectData.link && (
                                        <a 
                                            href={projectData.link || ''}
                                            target="_blank"
                                        >
                                            <Link 
                                                size={30}
                                                className={styles.modalLinkItemLink}
                                            />
                                        </a>
                                    )}                                
                                </div>
                            </div>
                        </div>                        
                    </div>
                    <div className={styles.projectSkillsContainer}>
                    {projectData.skills ? (

                        <>
                            <h2>Skills Developed</h2>
                            <div className={styles.projectToolsList}>
                                {skillOrder.map((category) => {
                                    const skillsArray = projectData.skills![category as keyof typeof projectData.skills] || []
                                    return skillsArray?.length > 0 && (
                                        <div key={category} className={styles.projectSkillsCategory}>
                                            <h4>{category.charAt(0).toUpperCase() + category.slice(1)}:</h4>
                                                <ul className={styles.projectSkillsList}>
                                                    {skillsArray.map((skill, index) => (
                                                        <p key={index} className={`${styles.projectSkillItem} ${styles[category]}`}>
                                                            {skill}
                                                        </p>
                                                    ))}
                                                </ul>
                                        </div>        
                                    );
                                })}
                            </div>
                        </>
                    ) : (
                        <p>loading experience for this project...</p>
                    )}


                    </div>                    
                </main>
            </div>
        </div>
    )
}