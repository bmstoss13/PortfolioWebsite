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
                        <p>I'm a recent University of Virginia graduate with a B.A. in Computer Science and a minor in Data Science, and I'm passionate about building software that solves real-world problems. My experience ranges from creating scalable full-stack applications to applying machine learning models for data analysis and optimization. I love the entire process of bringing an idea to life, from the initial design to the final, polished product.</p>
                        
                    </div>
                </div>

                
                <div className={styles.aboutMeRowFirst}>

                    <div className={styles.aboutMeTextSection}>
                        <p>Outside of coding, I enjoy making music - especially synthwave. This is a hobby that mirrors the creative and iterative process of programming as it involves picking the right tool {'(and even building it from scratch)'} and finetuning it to perfection. I believe in staying balanced, so you'll often find me at the gym or on a long walk with friends, recharging and prepping for my next challenge.</p>
                            <p>Feel free to check out my resume{' '} 
                                <a
                                    href='/resume.pdf'
                                    target='_blank'
                                    rel="noopener noreferrer"
                                    className={styles.resumeLink}
                                >
                                    <strong>here.</strong>
                                </a>
                            </p>
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