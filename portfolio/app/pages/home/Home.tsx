"use client";

import styles from "./Home.module.css";

export default function Landing() {
    return(
        <div className={styles.landingContainer}>
            <div className={styles.pageHeader}>
                <h1><span className={styles.nameHighlight}>Brian Stoss's</span> Portfolio</h1>
                <p>Learner, Educator, and Developer - passionate about building clean, scalable, and user-focused applications.</p>
            </div>
        </div>

    );
};