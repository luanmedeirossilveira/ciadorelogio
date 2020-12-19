import React, { useState } from 'react'
import { Button, Col, Container, Form, Image, Jumbotron, Row } from 'react-bootstrap'
import Router from 'next/router'

export default function Formulario () {
    const [form, setForm] = useState({
        sugestao: null,
        facilidade: 5,
        tempo: 5,
        confianca: 5,
        servico: 5,
        name: null,
        email: null,
        tel: null
    })

    const [success, setSucess] = useState(false)

    async function onSubmit(e) {
        e.preventDefault()
        const response = await fetch('/api/form', {
            method: 'POST',
            body: JSON.stringify(form)
        })
        const data = await response.json()

		if(data.success){
            setSucess(true)
        }
    }

    function onChange (e) {
        const { name, value } = e.target

        setForm({
            ...form,
            [name]: value
        })
    }

    return (
        <Container style={{marginTop: "1rem", marginBottom: "1rem"}}>
            <Form className="text-center" onSubmit={onSubmit}>
                {!success &&
                <>
                <Form.Group style={{margin: "4rem 0"}} controlId="formBasicRange">
                    <Form.Label style={{fontSize: "2rem"}}>Seu nome completo*</Form.Label>
                    <Form.Control type="text" name="name"  value={form.name} onChange={onChange} required/>
                </Form.Group>
                <Form.Group style={{margin: "4rem 0"}} controlId="formBasicRange">
                    <Form.Label style={{fontSize: "2rem"}}>Seu email*</Form.Label>
                    <Form.Control type="email" name="email"  value={form.email} onChange={onChange} required/>
                </Form.Group>
                <Form.Group style={{margin: "4rem 0"}} controlId="formBasicRange">
                    <Form.Label style={{fontSize: "2rem"}}>Seu Celular/Telefone para contato*</Form.Label>
                    <Form.Control type="tel" name="tel"  value={form.tel} onChange={onChange} required/>
                </Form.Group>
                <Form.Group style={{margin: "4rem 0", textAlign: "center"}} controlId="formBasicRange">
                    <Form.Label style={{fontSize: "2rem"}}>Qual a facilidade do atendimento? <span style={{fontSize: "1rem"}}>(Arraste para classificar)</span></Form.Label><br></br>
                    <Form.Control type="range" min="0" max="5" name="facilidade"  value={form.facilidade} onChange={onChange}/>
                    <Form.Control value={form.facilidade} readOnly style={{width: "2.5rem"}}/>
                </Form.Group>
                <Form.Group style={{margin: "4rem 0"}} controlId="formBasicRange">
                    <Form.Label style={{fontSize: "2rem"}}>Agradável seu tempo de espera? <span style={{fontSize: "1rem"}}>(Arraste para classificar)</span></Form.Label><br></br>
                    <Form.Control type="range" min="0" max="5" name="tempo" value={form.tempo} onChange={onChange}/>
                    <Form.Control value={form.tempo} readOnly style={{width: "2.5rem"}}/>
                </Form.Group>
                <Form.Group style={{margin: "4rem 0"}} controlId="formBasicRange">
                    <Form.Label style={{fontSize: "2rem"}}>Qual a confiança despertada pelo atendente? <span style={{fontSize: "1rem"}}>(Arraste para classificar)</span></Form.Label><br></br>
                    <Form.Control type="range" min="0" max="5" name="confianca" value={form.confianca} onChange={onChange}/>
                    <Form.Control value={form.confianca} readOnly style={{width: "2.5rem"}}/>
                </Form.Group>
                <Form.Group style={{margin: "4rem 0"}} controlId="formBasicRange">
                    <Form.Label style={{fontSize: "2rem"}}>Qual a satisfação do serviço feito? <span style={{fontSize: "1rem"}}>(Arraste para classificar)</span></Form.Label><br></br>
                    <Form.Control type="range" min="0" max="5" name="servico" value={form.servico} onChange={onChange}/>
                    <Form.Control value={form.servico} readOnly style={{width: "2.5rem"}}/>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label style={{fontSize: "2rem"}}>Deixe sua opinião, sugestão ou crítica abaixo:</Form.Label>
                    <Form.Control as="textarea" rows={3}  name="sugestao" value={form.sugestao} onChange={onChange}/>
                </Form.Group>
                <Button size="lg" type="submit" variant="dark">Enviar</Button>
                </>
                }{success &&
                    <div>
                        <h1>Obrigado pelo feedback!</h1>
                    </div>
                }
            </Form>
        </Container>
    )
}