import { WorkData } from '@/lib/firebase/Interfaces';
import styles from './WorkPage.module.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import WorkCard from '@/components/Work/WorkCard';
import WorkExperience from '@/components/Work/WorkExperience';
import { BriefcaseBusinessIcon } from "lucide-react"

export default function WorkPage(){
    const [workData, setWorkData] = useState<WorkData[] | null>(null);
    const [workExperience, setWorkExperience] = useState<WorkData | null>(null);
    const [selectedWorkId, setSelectedWorkId] = useState<string | null>(null);

    const fetchWorkData = async() => {
        try{
            const url = '/api/work'
            const { data } = await axios.get(url);
            setWorkData(data.data);

            if (data.data.length > 0) {
                setWorkExperience(data.data[0])
                setSelectedWorkId(data.data[0].id)
            }

        } catch (err: any) {
            console.log("an error occurred while fetching work data from db: ", err);
        }
    }

    const handleWorkCardClick = (work: WorkData) => {
        setWorkExperience(work);
        setSelectedWorkId(work.id)
    }

    useEffect(() => {
        fetchWorkData();
    }, []);

    return(
        <section id="work-experience" className={styles.workExperienceWrapper}>
            <div className={styles.workExperienceContainer}>
                <div className={styles.workExperienceHeader}>
                    <h1>Work Experience</h1>
                    <BriefcaseBusinessIcon size={35} className={styles.workExperienceIcon}/>
                </div>

                <div className={styles.workContainer}>
                    <div className={styles.cardContainer}>
                        {workData ? (
                            workData.map((work) => {
                                return(
                                    <WorkCard 
                                        key={work.id} 
                                        workData={work} 
                                        onCardClick={handleWorkCardClick}
                                        isSelected={work.id === selectedWorkId}
                                    />
                                )
                            })
                        ) : (
                            <p>Loading work experience...</p>
                        )}
                    </div>

                    <div className={styles.experienceContainer}>
                        {workExperience ? (
                            <WorkExperience workData={workExperience}/>
                        ) : (
                            <p></p>
                        )}

                    </div>

                </div>
            </div>
        </section>

    )
};