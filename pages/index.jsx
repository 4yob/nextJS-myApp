import styles from '../styles/Home.module.css';
import Header from '../components/Header';

export default function Home() {
    return (
        <div className={styles.container}>
            <Header />
            <main className={styles.main}>
            <section className={styles.block}>
                <article className={styles.article}>
                    <div className={styles.card}></div>
                    <div className={styles.card}></div>
                    <div className={styles.card}></div>
                </article>
                <aside className={styles.aside}>
                    <img src="https://i.pinimg.com/736x/58/50/17/5850179e4e5deef08ad5d250aef82a76.jpg"/>
                </aside>
            </section>
            </main>
        </div>
    );
}