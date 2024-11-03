import { frameworks } from './config';
import styles from './styles.module.css';

const Frameworks = () => {


    return <div className={styles.scrollingContainer}>
        {frameworks.map((framework, index) => (
            <span
                key={framework}
                className={styles.scrolling}
            >
                {framework}
            </span>
        ))}
    </div>
}

export { Frameworks };