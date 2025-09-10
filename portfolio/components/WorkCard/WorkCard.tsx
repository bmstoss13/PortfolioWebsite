import { WorkData } from '@/lib/firebase/Interfaces';
import styles from './WorkCard.module.css';

interface WorkCardProps{
    workData: WorkData;
    onCardClick: (workExperience: WorkData) => void;
    onIsSelected: () => void;
}

const WorkCard = ({workData, onCardClick, onIsSelected}: WorkCardProps) => {
    return(
        <div className={styles.workCardContainer} onClick={()=>(onCardClick(workData))}>
            <h3>{workData.role}</h3>
            <p className={styles.workCardPosition}>@{workData.companyName}</p>
            <ul className={styles.workCardList}>
                <li>{workData.location}</li>
                <li>{workData.startDate} - {workData.endDate}</li>
            </ul>
        </div>

    )
};

export default WorkCard;