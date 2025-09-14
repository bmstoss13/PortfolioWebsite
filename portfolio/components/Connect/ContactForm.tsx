// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

import styles from './ContactForm.module.css';

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mvgbynje");
  if (state.succeeded) {
      return <p>Message received! Thanks!</p>;
  }
  return (
        <form onSubmit={handleSubmit} className={styles.contactForm}>
            <label htmlFor="email" className={styles.formLabel}>
                Email Address
            </label>
            <input
                id="email"
                type="email" 
                name="email"
                placeholder='youremail@domain.com'
                className={styles.formInput}
            />
            <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
                className={styles.validationError}
            />
            <label htmlFor="message" className={styles.formLabel}>
                Message
            </label>
            <textarea
                id="message"
                name="message"
                placeholder='type your message here...'
                className={`${styles.formInput} ${styles.messageBox}`}
            />
            <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
                className={styles.validationError}
            />
            <button type="submit" disabled={state.submitting} className={styles.submitButton}>
                Submit
            </button>
        </form>
    );
}