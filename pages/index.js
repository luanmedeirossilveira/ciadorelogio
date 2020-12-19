import Head from 'next/head'
import { Breadcrumb } from 'react-bootstrap'
import styles from '../styles/Home.module.css'

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Cia do Relógio</title>
        <link rel="icon" href="/logotipo.ico" />
      </Head>

      <main className={styles.main}>
      <Breadcrumb className="breadcrumb">
        <Breadcrumb.Item href="/">Início</Breadcrumb.Item>
      </Breadcrumb>
        
        <h1 className={styles.title}>
          Bem vindo à <span>Cia do Relógio</span>
        </h1>

        <div className={styles.grid}>
          <a href="https://pesquisacia.vercel.app" className={styles.card}>
            <h3>Feedback &rarr;</h3>
            <p>Têm sugestões, opiniões e críticas? Entre aqui e nos ajude a melhorar!</p>
          </a>

          <a href="/pulseiras" className={styles.card}>
            <h3>Pulseiras</h3>
            <p>Veja a lista com marcas de pulseiras.</p>
          </a>

          <a
            href="/relogios"
            className={styles.card}
          >
            <h3>Relógios</h3>
            <p>Veja as marcas que trabalhamos com relógios.</p>
          </a>

          <a
            href={`https://wa.me/555137371597`}
            className={styles.card}
          >
            <h3>Contatos</h3>
            <p>
              Entre em contato conosco pelo Whatsapp.
            </p>
          </a>
        </div>
      </main>

      <footer className="footer">
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
