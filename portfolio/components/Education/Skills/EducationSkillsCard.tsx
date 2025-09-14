import styles from './EducationSkillsCard.module.css';

const EducationSkillsCard = () => {
    const languages = ['Python', 'Java', 'C', 'C++', 'HTML', 'CSS', 'SQL', 'OOP'];
    const frameworks = ['Bootstrap', 'Django', 'Spring Boot', 'Spring MVC'];
    const databases = ['PostgreSQL', 'MySQL', 'MongoDB', 'AWS S3', 'Google Cloud'];
    const dataScience = ['EDA', 'ETL', 'Scikit-learn', 'TensorFlow', 'Keras', 'NumPy', 'Pandas', 'Seaborn'];
    const tools = ['Git/GitHub', 'CI/CD', 'Testing', 'Agile', 'Figma', 'REST APIs', 'OpenAPI', 'UI/UX'];

    return (
        <div className={styles.educationCardContainer}>
            <h2>Relevant Skills Developed</h2>
            <div className={styles.educationSkillsList}>
                <div className={styles.educationSkillsCategory}>
                    <strong>Languages:</strong>
                    <div className={styles.languagesList}>
                        {languages.map(language => (
                            <p 
                                key={language}
                                className={`${styles.educationSkillsItem} ${styles.languages}`}                            
                            >
                                {language}
                            </p>
                        ))}
                    </div>
                </div>
                <div className={styles.educationSkillsCategory}>
                    <strong>Frameworks:</strong>
                    <div className={styles.languagesList}>
                        {frameworks.map(skill => (
                            <p
                                key={skill}
                                className={`${styles.educationSkillsItem} ${styles.frameworks}`}
                            >
                                {skill}
                            </p>
                        ))}
                    </div>
                </div>
                <div className={styles.educationSkillsCategory}>
                    <strong>Databases:</strong>
                    <div className={styles.languagesList}>
                        {databases.map(skill => (
                            <p
                                key={skill}
                                className={`${styles.educationSkillsItem} ${styles.databases}`}
                            >
                                {skill}
                            </p>
                        ))}
                    </div>
                </div>
                <div className={styles.educationSkillsCategory}>
                    <strong>Tools:</strong>
                    <div className={styles.languagesList}>
                        {tools.map(skill => (
                            <p
                                key={skill}
                                className={`${styles.educationSkillsItem} ${styles.tools}`}
                            >
                                {skill}
                            </p>
                        ))}
                    </div>
                </div>
                <div className={styles.educationSkillsCategory}>
                    <strong>Data Science & Machine Learning:</strong>
                    <div className={styles.languagesList}>
                        {dataScience.map(skill => (
                            <p
                                key={skill}
                                className={`${styles.educationSkillsItem} ${styles.dataScience}`}
                            >
                                {skill}
                            </p>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default EducationSkillsCard;