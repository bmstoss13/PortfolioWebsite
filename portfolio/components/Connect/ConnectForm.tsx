import { useState } from 'react';
import styles from './ConnectForm.module.css';
import ContactForm from './ContactForm';
import {SendIcon} from 'lucide-react'

const ConnectForm = () => {
    const [isAnimating, setIsAnimating] = useState(false);

    const handleAnimation = () => {
        setIsAnimating(true)
    }

    const handleAnimationOver = () => {
        setIsAnimating(false);
    }

    return(
        <div className={styles.connectFormContainer}>
            <span className={styles.connectHeader}>
                <h1>Contact Me</h1>
                <SendIcon 
                    size={40}
                    className={`${styles.sendIcon} ${isAnimating ? styles.isAnimating : ''}`}
                    onClick={handleAnimation}
                    onAnimationEnd={handleAnimationOver}
                />
            </span>
            <h3>bmstoss13@gmail.com</h3>
            <ContactForm />
        </div>
    )
};

export default ConnectForm;