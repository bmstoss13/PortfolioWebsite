import styles from './Education.module.css';
import { GraduationCap } from 'lucide-react';
import { useState } from 'react';

export default function EducationPage(){
    const [isAnimating, setIsAnimating] = useState(false);

    const handleThrowing = () => {
        setIsAnimating(true);
    }

    const handleAnimationDone = () => {
        setIsAnimating(false);
    }

    return(
        <section
            id={'education'} 
            className={styles.educationPageContainer}
        >
            <div className={styles.educationPageHeader}>
                <h1>Education</h1>
                <GraduationCap 
                    size={40} 
                    className={`${styles.gradCap} ${isAnimating ? styles.animateCap : ''}`}
                    onClick={handleThrowing}
                    onAnimationEnd={handleAnimationDone}
                />
            </div>
        </section>
    )
}