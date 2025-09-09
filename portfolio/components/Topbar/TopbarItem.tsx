import styles from "./TopbarItem.module.css";

interface TopbarItemProps{
    name: string;
    id: string;
}

const TopbarItem = ({name, id}: TopbarItemProps) => {
    return(
        <div className={styles.topbarItemContainer}>
            <a
                href={`#${id}`}
            >
                <p>{name}</p>
            </a>
        </div>
    )
};

export default TopbarItem;