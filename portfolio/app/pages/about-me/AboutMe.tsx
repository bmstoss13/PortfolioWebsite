'use client';

import {useState} from 'react';
import styles from './AboutMe.module.css'
import aboutMe from '@/public/AboutMe.png'
import Image from 'next/image';
import { Hand } from 'lucide-react'

export default function AboutMe(){
    const [ isHighFiving, setIsHighFiving ] = useState(false);

    const handleHighFiving = () => {
        setIsHighFiving(true);

        setTimeout(()=>{
            setIsHighFiving(false);
        }, 500);
    }
    return(
        <div id="about-me" className={styles.aboutMeContainer}>
            <div className={styles.aboutMeHeader}>

                <h1>About Me</h1>
                <Hand 
                    className={isHighFiving ? styles.highFiving : styles.aboutMeWaving } 
                    onClick={handleHighFiving}
                    size={35}
                />
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