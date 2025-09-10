import { WorkData } from '@/lib/firebase/Interfaces';
import styles from './WorkCard.module.css';

interface WorkCardProps{
    workData: WorkData;
    onCardClick: (workExperience: WorkData) => void;
    isSelected: boolean;
}

const WorkCard = ({workData, onCardClick, isSelected}: WorkCardProps) => {

    return(
        <div className={`${styles.workCardContainer} ${isSelected ? styles.selectedCard : ''}`} 
            onClick={()=>(onCardClick(workData))}
        >
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