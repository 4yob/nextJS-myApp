import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import Card from '../components/Card';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <div className={styles.container}>
            <Header />
            <main className={styles.main}>
            <section className={styles.block}>
                <article className={styles.article}>
                    <Card title="Quadros de Elementos Marinhos" text="Kit de quadros de elementos do fundo do mar" />
                    <Card title="Moldura e cores:" text="Branca de fundo azul"/>
                    <Card title="Preço:" text="R$35.00"/>
                </article>
                <aside className={styles.aside}>
                    <img className={styles.image} src="https://i.pinimg.com/736x/58/50/17/5850179e4e5deef08ad5d250aef82a76.jpg"/>
                </aside>
            </section>
            </main>
            <Footer />
        </div>
    );
}