import styles from '../styles/Card.module.css';

export default function Card() {
    return (
        <div className={styles.card}>
            <h1 className={styles.title}>QUADROS ELEMENTOS DO MAR</h1>
            <p className={styles.text}>COR: AZUL</p>
            <p className={styles.text}>R$35.00</p>
        </div>
    );
}
