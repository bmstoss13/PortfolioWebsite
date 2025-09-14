import Image from 'next/image';
import styles from './UniversityPhoto.module.css';

const UniversityPhoto = () => {
    return(
        <div className={styles.universityPhotoContainer}>
            <Image 
                src={'/university-photo-zoomed.png'}
                alt={'university photo'}
                fill
                className={styles.universityPhoto}
            />
        </div>
    )
}

export default UniversityPhoto;