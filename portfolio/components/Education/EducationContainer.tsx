import styles from './EducationContainer.module.css';
import EducationStats from './EducationStats/EducationStats';
import UniversityPhoto from './Photo/UniversityPhoto';
import EducationSkillsCard from './Skills/EducationSkillsCard';

const EducationContainer = () => {
    return(
        <div className={styles.educationContainerWrapper}>
            <div className={styles.educationContainerBody}>
                <div className={styles.imageRow}>
                    <div className={styles.gradPictureWrapper}>
                        <UniversityPhoto />
                    </div>

                    <div className={styles.educationStatsContainer}>
                        <EducationStats />
                    </div>
                </div>
                <div className={styles.educationSkillsContainer}>
                    <EducationSkillsCard />
                </div>
            </div>


        </div>
    )
}

export default EducationContainer;