import styles from '../../styles/Page.module.css'
import dbConnect from '../../db/dbConnect'
import Produtos from '../../models/Produtos'
import React from 'react'
import { Breadcrumb } from 'react-bootstrap'

dbConnect().catch(()=>console.log)

export default function Champion({ champion }){

    const item = JSON.parse(champion)

    return(
        <>
        <div className={styles.container}>
            <Breadcrumb className="breadcrumb">
                <Breadcrumb.Item href="/">Início</Breadcrumb.Item>
                <Breadcrumb.Item href="/relogios">
                    Relógio
                </Breadcrumb.Item>
                <Breadcrumb.Item href="/relogios/champion">
                    Champion 
                </Breadcrumb.Item>
            </Breadcrumb>
            <div className={styles.grid}>
                <React.Fragment>
                    {item.map((item)=>{
                        return(
                            <a key={item._id} href="#" className={styles.card}>
                                <h3>{item.name}&rarr;</h3>
                                <img src={item.image} 
                                    alt="model"
                                    className={styles.image}
                                    />
                            </a>
                        )
                    })}
                </React.Fragment>
            </div>
        </div>
        </>
    )
}

export async function getServerSideProps(){

    const produtos = await Produtos.find({marca: "Champion"});


    console.log(produtos)

    return {
        props: {
            champion: JSON.stringify(produtos)
        }
    }

}