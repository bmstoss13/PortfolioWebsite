'use client';

import {useState} from 'react';
import styles from './AboutMe.module.css';
import aboutMe from '@/public/AboutMe.png';
import aboutMeSecond from '@/public/AboutMe2.jpg';
import Image from 'next/image';
import { Hand } from 'lucide-react';

export default function AboutMe(){
    const [ isHighFiving, setIsHighFiving ] = useState(false);

    const handleHighFiving = () => {
        setIsHighFiving(true);

        setTimeout(()=>{
            setIsHighFiving(false);
        }, 500);
    }
    return(
        <section id="about-me" className={styles.aboutMeContainer}>
            <header className={styles.aboutMeHeader}>

                <h1>About Me</h1>
                <Hand 
                    className={isHighFiving ? styles.highFiving : styles.aboutMeWaving } 
                    onClick={handleHighFiving}
                    size={40}
                />
            </header>
            <div className={styles.aboutMeBody}>
                <div className={styles.aboutMeRowFirst}>
                    {aboutMe && (
                        <Image
                            src={aboutMe.src} 
                            alt="about-me-image" 
                            className={styles.aboutMeImage}
                            width={200}
                            height={200}
                        >
                        </Image>
                    )}
                    <div className={styles.aboutMeTextSection}>
                        <p>Hi, I’m Brian - a 2025 B.A. Computer Science and Data Science minor graduate from the University of Virginia. I enjoy building systems that make life simpler, whether that’s fine-tuning AI models for accuracy, creating scalable full-stack apps, or rethinking how users interact with software. My recent work has ranged from applying OCR and AI at Kinetech Cloud to developing my own projects, like <strong>Sunshine</strong>, a social media platform I'm building from the ground up with a Go backend and Next.js frontend.</p>
                        <p>I’m especially drawn to projects where I can take an idea from scratch to a working product - cleaning messy data, designing a user interface, and seeing everything come together in a tool people actually enjoy using. </p>
                    </div>
                </div>

                
                <div className={styles.aboutMeRowFirst}>

                    <div className={styles.aboutMeTextSection}>
                        <p>I’ve also explored ML with projects like <strong>Detecting Fish Features Using YOLOv8-based CNN</strong>, where my team trained a YOLO-v8-based CNN model with 2000+ JPEGs from longline tuna vessel footage in the Pacific to monitor and prevent overfishing of fish species.</p>
                        <p>Outside of coding, I stay creative by making music, which uses a lot of the same iterative process as programming. You’ll also find me at the gym or on long walks with friends, which keep me balanced and ready for the next challenge.</p>
                    </div>                    
                        
                            <Image
                                src={aboutMeSecond.src} 
                                alt="about-me-image-second" 
                                className={styles.aboutMeImage}
                                width={200}
                                height={200}
                            >
                            </Image>
                    </div>

            </div>
        </section>
    )
}