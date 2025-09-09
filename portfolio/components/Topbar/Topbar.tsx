import styles from './Topbar.module.css';
import TopbarItem from './TopbarItem';


const Topbar = () => {
    const topbarItems = { 
        "about-me": "About Me",
        "work-experience": "Work Experience", 
        "projects": "Projects", 
        "education": "Education", 
        "connect": "Connect"
    };

    return(
        <div className={styles.topbarContainer}>
            {topbarItems && (Object.entries(topbarItems).map(([key, value]) => {
                return <TopbarItem key={key} name={value} id={key}/>
            }))}
        </div>
    );
};

export default Topbar;