import styles from './index.less'

const Home = () => {
    return (
        <div className={styles.home}>
            <div className={styles.home_welcome}>
                <span className={styles.home_welcome_text}>人生苦短 及时追梦</span>
            </div>         
        </div>
    );
}

export default Home