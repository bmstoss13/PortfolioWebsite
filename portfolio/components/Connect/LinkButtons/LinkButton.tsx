import Image from 'next/image';
import styles from './LinkButton.module.css';

interface LinkButtonProps{
    image: string;
    name: string;
    url: string;
}

const LinkButton = ({image, name, url}: LinkButtonProps) => {
    return(
        <div className={styles.linkButtonContainer}>
            <a
                href={url}
                target='_blank'
                className={styles.buttonContent}
            >
                <Image 
                    src={image}
                    alt={name}
                    width={35}
                    height={35}
                />
            </a>
        </div>
    )
}

export default LinkButton