import React from 'react'
import { Col, Form, Row, Accordion, Card, Button, Breadcrumb } from 'react-bootstrap'
import Produtos from '../../models/Produtos'
import dbConnect from '../../db/dbConnect'
import styles from '../../styles/Page.module.css'

dbConnect().catch(error=> console.log(error))

export default function Products({retorno}){

    //Transformar JSON.parse os produtos
    const produtos = JSON.parse(retorno)

    return (
        <>
            <Row className="text-center">
                <Col>
                    <Breadcrumb className="breadcrumb">
                        <Breadcrumb.Item href="/">Início</Breadcrumb.Item>
                        <Breadcrumb.Item href="/pulseiras">
                            Pulseiras
                        </Breadcrumb.Item>
                        <Breadcrumb.Item href={`/pulseiras/${produtos._id}`}>
                            {produtos.name}
                        </Breadcrumb.Item>
                    </Breadcrumb>
                </Col>
            </Row>
            <Row style={{marginTop: "3rem"}}>
                <Col sm={8} className="text-center">
                    <img src={produtos.image} className={styles.image} /><br />
                    <a href={`https://wa.me/555137371597?text=Olá!%20Gostei%20do%20modelo%20${produtos.name}!%20`}>
                        <Button className={styles.btn} variant="dark">Entre em contato conosco</Button>
                        </a>
                </Col>
                <Col sm={3} className="col-description-produtos text-center" style={{padding: "1rem"}}>
                    {/* Nome do produto */}
                    <h1>{produtos.name}</h1>

                    <hr></hr>

                    <Accordion>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="ligth" eventKey="0">
                                    Descrição
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">

                                <Card.Body>
                                    {produtos.description}
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </Col>
            </Row>
        </>
    )
}

export async function getStaticPaths(){
    //Return a list of possible balue for id

    const produtos = await Produtos.find({})
    let paths = []

    for(let i = 0; i < produtos.length; i++){
        paths.push({ params: { id: produtos[i]._id.toString() }})
    }

    return{
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params }){

    // Fetch necessary data for the item post using params.
    const produtos = await Produtos.findOne({_id: params.id})

    return{
        props:{
            retorno: JSON.stringify(produtos)
        }
    }
}