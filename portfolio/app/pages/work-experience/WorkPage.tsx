import { WorkData } from '@/lib/firebase/Interfaces';
import styles from './WorkPage.module.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import WorkCard from '@/components/WorkCard/WorkCard';

export default function WorkPage(){
    const [workData, setWorkData] = useState<WorkData[] | null>(null);

    const fetchWorkData = async() => {
        try{
            const url = '/api/work'
            const { data } = await axios.get(url);
            setWorkData(data.data);

        } catch (err: any) {
            console.log("an error occurred while fetching work data from db: ", err);
        }
    }

    useEffect(() => {
        fetchWorkData();
    }, []);

    return(
        <div className={styles.workExperienceContainer}>
            <h1 className={styles.workExperienceHeader}>Work Experience</h1>
            <div>
                {workData ? (
                    workData.map((work) => {
                        return(
                            <WorkCard key={work.id} workData={work}/>
                        )
                    })
                ) : (
                    <p>Loading work experience...</p>
                )}
            </div>
        </div>
    )
};