import { ProjectData } from '@/lib/firebase/Interfaces';
import styles from './ProjectModal.module.css';
import {XIcon, Link, GitBranchIcon } from 'lucide-react'
import Image from 'next/image';
import GitHub from '/github-svgrepo-com.svg'

interface ProjectModalProps{
    projectData: ProjectData;
    onClose: () => void;
}

export default function ProjectModal({projectData, onClose}: ProjectModalProps){
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
                                        />
                                    </a>
                                )}                                
                            </div>
                        </div>
                    </div>                        
                </div>
                <div>
                    <p>Tools Developed</p>
                    {projectData.skills && (
                        <div></div>
                    )}
                </div>

            </div>
        </div>
    )
}