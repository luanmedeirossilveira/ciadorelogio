import React from 'react'
import { Breadcrumb } from 'react-bootstrap'
import styles from '../styles/Relogios.module.css'

export default function Relogios() {

    return (
        <div className={styles.container}>
            <main className={styles.main}>
            <Breadcrumb className="breadcrumb">
                <Breadcrumb.Item href="/">Início</Breadcrumb.Item>
                <Breadcrumb.Item href="/relogios">
                    Relógio
                </Breadcrumb.Item>
            </Breadcrumb>
                <h1 className={styles.title}>
                    Conheça nossas linhas de relógios
                </h1>

            <div className={styles.grid}>
                <a href="/relogios/mormaii" className={styles.card}>
                    <h3>Mormaii &rarr;</h3>
                    <p>Veja a linha esportiva e Smartwatchs</p>
                </a>

                <a href="/relogios/casio" className={styles.card}>
                    <h3>Casio &rarr;</h3>
                    <p>Veja a linha G-Shock e Vintage</p>
                </a>

                <a
                    href="/relogios/champion"
                    className={styles.card}
                >
                    <h3>Champion &rarr;</h3>
                    <p>Veja a linha social</p>
                </a>

                <a
                    href="/relogios/herweg"
                    className={styles.card}
                >
                    <h3>Herweg &rarr;</h3>
                    <p>
                        Veja a linha de despertadores 
                    </p>
                </a>
            </div>
        </main>
        </div>
    )
}