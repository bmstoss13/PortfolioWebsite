import ConnectForm from '@/components/Connect/ConnectForm';
import styles from './ConnectPage.module.css';

export default function ConnectPage(){
    return(
        <section id='connect'className={styles.connectPageContainer}>
            <ConnectForm/>
        </section>
    )
}