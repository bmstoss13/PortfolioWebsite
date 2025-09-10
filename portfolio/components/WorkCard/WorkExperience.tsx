import { WorkData } from '@/lib/firebase/Interfaces';
import styles from './WorkExperience.module.css';

interface WorkExperienceProps{
    workData: WorkData;
}

const WorkExperience = ({workData}: WorkExperienceProps) => {

    const skillOrder = ['languages', 'frameworks', 'databases', 'tools'];

    return(
        <div className={styles.experienceContainer}>
            <div className={styles.experienceHeader}>
                <h2>{workData.role}</h2>
                <p>@{workData.companyName}</p>
            </div>
            <p>{workData.experience}</p>
            <h2 className={styles.skillsSection}>Skills Developed</h2>
            <div className={styles.toolsList}>

                {workData.skills ? (
                    skillOrder.map((category) => {
                        const skillsArray = workData.skills[category as keyof typeof workData.skills] || []
                        return skillsArray?.length > 0 && (
                            <div key={category}>
                                <h4>{category.charAt(0).toUpperCase() + category.slice(1)}:</h4>
                                    <ul className={styles.skillsList}>
                                    {skillsArray.map((skill, index) => (
                                        <p key={index} className={styles.skillItem}>
                                            {skill}
                                        </p>
                                    ))}
                                    </ul>
                            </div>
                        )
                    })
                ) : (
                    <p>loading experience for this role...</p>
                )}
            </div>
        </div>
    )
}

export default WorkExperience;