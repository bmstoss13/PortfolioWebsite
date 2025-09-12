"use client";

import styles from "./Home.module.css";
import background from "@/public/background1.png";

export default function Landing() {
    return(
        <div className={styles.landingContainer}>
            <div className={styles.pageHeader}>
                <h1><span className={styles.nameHighlight}>Brian Stoss's</span> Portfolio</h1>
                <p>Full Stack Developer and Creator - passionate about building clean, scalable, and user-focused applications.</p>
            </div>
        </div>

    );
};