import { WorkData } from '@/lib/firebase/Interfaces';
import styles from './WorkCard.module.css';

interface WorkCardProps{
    workData: WorkData;
}

const WorkCard = ({workData}: WorkCardProps) => {
    return(
        <div>
            <h2>{workData.companyName}</h2>
            {workData.experience}
        </div>
    )
};

export default WorkCard;