import { WorkData } from '@/lib/firebase/Interfaces';
import styles from './WorkCard.module.css';

interface WorkCardProps{
    workData: WorkData;
}

const WorkCard = ({workData}: WorkCardProps) => {
    return(
        <div>
            {workData.companyName}
        </div>
    )
};

export default WorkCard;