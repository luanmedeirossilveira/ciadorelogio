import styles from '../../styles/Page.module.css'
import dbConnect from '../../db/dbConnect'
import Produtos from '../../models/Produtos'
import React from 'react'
import { Breadcrumb } from 'react-bootstrap'

dbConnect().catch(()=>console.log)

export default function Fox({ fox }){

    const item = JSON.parse(fox)

    return(
        <>
        <div className={styles.container}>
            <Breadcrumb className="breadcrumb">
                <Breadcrumb.Item href="/">Início</Breadcrumb.Item>
                <Breadcrumb.Item href="/pulseiras">
                Pulseiras
                </Breadcrumb.Item>
                <Breadcrumb.Item href="/pulseiras/marco-fox">
                    MarcoFox   
                </Breadcrumb.Item>
            </Breadcrumb>
            <div className={styles.grid}>
                <React.Fragment>
                    {item.map((item)=>{
                        return(
                            <a key={item._id} href={`/pulseiras/${item._id}`} className={styles.card}>
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

    const produtos = await Produtos.find({marca: "MarcoFox"});


    console.log(produtos)

    return {
        props: {
            fox: JSON.stringify(produtos)
        }
    }

}