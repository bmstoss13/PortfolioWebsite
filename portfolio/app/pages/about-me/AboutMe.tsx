'use client';

import styles from './AboutMe.module.css'
import aboutMe from '@/public/AboutMe.png'
import Image from 'next/image';
import { Hand } from 'lucide-react'

export default function AboutMe(){
    return(
        <div className={styles.aboutMeContainer}>
            <div className={styles.aboutMeHeader}>

                <h1>About Me</h1>
                <Hand className={styles.aboutMeWaving} size={30}/>
            </div>
            <div className={styles.aboutMeBody}>
                <div>
                    {aboutMe && (
                        <img src={aboutMe.src} alt="about-me-image" className={styles.aboutMeImage}>
                        </img>
                    )}
                </div>
                <div>
                    <p>I am a recent Computer Science graduate from The University
                    of Virginia. I am a full-stack developer, with proficiency in TypeScript,
                    Python, Java, and Golang. TODO: FINISH LATER</p>
                </div>
            </div>
        </div>
    )
}