import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cia do Relógio</title>
        <link rel="icon" href="/logotipo.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Bem vindo à <span>Cia do Relógio</span>
        </h1>

        <div className={styles.grid}>
          <a href="https://pesquisacia.vercel.app" className={styles.card}>
            <h3>Feedback &rarr;</h3>
            <p>Têm sugestões, opiniões e críticas? Entre aqui e nos ajude a melhorar!</p>
          </a>

          <a href="#" className={styles.card}>
            <h3>Baterias e Pilhas</h3>
            <p>Veja a lista de baterias e entre em contato conosco</p>
          </a>

          <a
            href="#"
            className={styles.card}
          >
            <h3>Relógios</h3>
            <p>Veja as marcas que trabalhamos com relógios.</p>
          </a>

          <a
            href="#"
            className={styles.card}
          >
            <h3>Contatos</h3>
            <p>
              Encontre nossas lojas e entre em contato.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://mokit.digital/"
          target="_blank"
          rel="mokit digital"
        >
          Design/Project by{' '}
          Mokit Digital
        </a>
      </footer>
    </div>
  )
}
