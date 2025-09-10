"use client";

import styles from "./Home.module.css";
import background from "@/public/background1.png";

export default function Landing() {
    return(
        <div className={styles.landingContainer}>
            <div className={styles.pageHeader}>
                <h1>Brian Stoss's Portfolio</h1>
                <p>My coding journey so far</p>
            </div>
        </div>

    );
};