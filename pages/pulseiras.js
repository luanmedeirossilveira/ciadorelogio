import React from 'react'
import { Breadcrumb } from 'react-bootstrap'
import styles from '../styles/Relogios.module.css'

export default function Pulseiras() {

    return (
        <div className={styles.container}>
            <main className={styles.main}>
            <Breadcrumb className="breadcrumb">
                <Breadcrumb.Item href="/">Início</Breadcrumb.Item>
                <Breadcrumb.Item href="/pulseiras">
                    Pulseiras
                </Breadcrumb.Item>
            </Breadcrumb>
            <h1 className={styles.title}>
                Conheça nossas linhas de pulseiras
            </h1>

            <div className={styles.grid}>
                <a href="/pulseiras/marry-montan" className={styles.card}>
                    <h3>Marry Montan &rarr;</h3>
                    <p>Veja a linha de pulseiras de couro</p>
                </a>

                <a href="/pulseiras/ostral" className={styles.card}>
                    <h3>Ostral &rarr;</h3>
                    <p>Veja a linha de pulseiras de couro</p>
                </a>

                <a
                    href="/pulseiras/diloy"
                    className={styles.card}
                >
                    <h3>Diloy &rarr;</h3>
                    <p>Veja a linha de pulseiras de couro e borracha</p>
                </a>

                <a
                    href="/pulseiras/marco-fox"
                    className={styles.card}
                >
                    <h3>MarcoFox &rarr;</h3>
                    <p>
                        Veja a linha de pulseiras de silicone e aço 
                    </p>
                </a>
            </div>
        </main>
        </div>
    )
}