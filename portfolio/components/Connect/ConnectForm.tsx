import { useState } from 'react';
import styles from './ConnectForm.module.css';
import ContactForm from './ContactForm';
import {SendIcon, Mail, Phone} from 'lucide-react'
import LinkButton from './LinkButtons/LinkButton';
import { ToastContainer, toast } from 'react-toastify';

const email = 'bmstoss13@gmail.com';
const phoneNumber = '(703)559-5960';

const ConnectForm = () => {
    const [isAnimating, setIsAnimating] = useState(false);

    const handleAnimation = () => {
        setIsAnimating(true)
    }

    const handleAnimationOver = () => {
        setIsAnimating(false);
    }

    const notify = (isEmail: boolean) => toast.success(`${isEmail ? 'Email' : 'Phone number'} copied to clipboard!`)

    function copyToClipboard(text: string, isEmail: boolean){
        navigator.clipboard.writeText(text).then(() => {
            notify(isEmail);
            console.log('Text copied to clipboard!');
        }).catch(err => {
            console.error('Failed to copy text: ', err);
        })
    }

    return(
        <div className={styles.connectFormContainer}>
            <ToastContainer/>
            <span className={styles.connectHeader}>
                <h1>Connect</h1>
                <SendIcon 
                    size={40}
                    className={`${styles.sendIcon} ${isAnimating ? styles.isAnimating : ''}`}
                    onClick={handleAnimation}
                    onAnimationEnd={handleAnimationOver}
                />
            </span>
            <div className={styles.contactContainer}>
                <div className={styles.contactInfo}>
                    <span className={styles.contactItem} onClick={()=>{copyToClipboard(email, true)}}>
                        <Mail className={styles.contactInfoIcon}/>
                        <h3>{email}</h3>
                    </span>
                    <span className={styles.contactItem} onClick={()=>{copyToClipboard(phoneNumber, false)}}>
                        <Phone className={styles.contactInfoIcon}/>
                        <h3>{phoneNumber}</h3>
                    </span>

                </div>              
                <ContactForm />
                <div className={styles.socialMedia}>
                    {/* <p>Platforms:</p> */}
                    <LinkButton
                        image='/linkedin.svg'
                        url='https://www.linkedin.com/in/brian-stoss-23520b287/'
                        name='LinkedIn'
                    />
                    <LinkButton
                        image='/github-svgrepo-com.svg'
                        url='https://github.com/bmstoss13'
                        name='GitHub'
                    />
                    <LinkButton
                        image='/facebook-13.svg'
                        url='https://www.facebook.com/brian.stoss.31/'
                        name='Facebook'
                    />

                </div>
            </div>

        </div>
    )
};

export default ConnectForm;