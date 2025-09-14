import styles from './EducationStats.module.css';

const EducationStats = () => {
    return(
        <div className={styles.educationStatsBox}>
            <div className={styles.statsHeader}>
                <h2 className={styles.universityName}>University of Virginia</h2>
                <h2 className={styles.graduationDate}>Graduated May 2025</h2>
            </div>
            <div>
                <h4>B.A. Computer Science, Minor in Data Science</h4>
            </div>
            <div className={styles.relevantCoursework}>
                <strong>Relevant Coursework:</strong>
                <p>Software Engineering | Data Structures & Algorithms I/II | Computer Systems & Organization I/II | Human-Computer Interactions | Data Systems | Data Ethics | Foundations of Machine Learning | Prototyping</p>
            </div>
            <div className={styles.activitiesContainer}>
                <strong>Activities:</strong>
                <ul className={styles.activitiesBullets}>
                    <li>Recruitment Chair, Alpha Sigma Phi - managed $20K+ budget</li>
                    <li>Intramural Official - organized and officiated college sports games</li>
                    <li>Catholic Hoos - participated regularly in Bible studies and other Church events</li>
                </ul>
            </div>

        </div>
    );
};

export default EducationStats;