import { useState } from "react";
import { Form, Button, Row, Container } from "react-bootstrap";
import style from '../styles/Register.module.css'

export default function Register() {
    const [ product, setProduct ] = useState({
        image: "",
        name: "",
        value: "",
        description: "",
        type: "",
        marca: ""
    });

    const [ success, setSuccess ] = useState(false);

    const onSubmit = async() =>{
        const response = await fetch('/api/hello', {
            method: 'POST',
            body: JSON.stringify(product)
        });

        response.json().then(res=> {
            if(res.success){
                setSuccess(true); 
            }else{
                alert('Erro ao cadastrar')
            }
        })
        
        setProduct({
            image: "",
            name: "",
            value: "",
            description: "",
            type: "",
            marca: ""
        });
    }

    function Cadastra() {
        setSuccess(false)
    }

    function onChange (e) {
        const { name, value } = e.target

        setProduct({
            ...product,
            [name]: value
        })
    }

    return(
        <Container className={style.container}>
            <Row className={style.main}>

                    {!success &&
            
                    <Form className={style.grid}>
                        <Form.Group controlId="formBasicImage">
                            <Form.Label>Url Image</Form.Label>
                            <Form.Control type="text" name="image" placeholder="URL Imagem" onChange={onChange} required />
                        </Form.Group>

                        <Form.Group controlId="formBasicNome">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control type="text" name="name" placeholder="Nome" onChange={onChange} required />
                        </Form.Group>

                        <Form.Group controlId="formBasicValor">
                            <Form.Label>Valor</Form.Label>
                            <Form.Control type="number" name="value" placeholder="Valor do produto" onChange={onChange} required />
                        </Form.Group>

                        <Form.Group controlId="formBasicDescricao">
                            <Form.Label>Descrição</Form.Label>
                            <Form.Control type="text" name="description" placeholder="Descrição" onChange={onChange} required style={{width: "30rem", heigth: "50rem"}} />
                        </Form.Group>

                        <Form.Group controlId="formBasicTipo">
                            <Form.Label>Tipo</Form.Label>
                            <Form.Control type="text" name="type" placeholder="Tipo de Relógio" onChange={onChange} required />
                        </Form.Group>

                        <Form.Group controlId="formBasicMarca">
                            <Form.Label>Marca</Form.Label>
                            <Form.Control type="text" name="marca" placeholder="Marca" onChange={onChange} required />
                        </Form.Group>

                        <Button variant="primary" onClick={onSubmit}>
                            Salvar
                        </Button>
                    </Form>
                    }{success &&
                        <div>
                            <h1>Enviado com sucesso!</h1>
                            <Button onClick={Cadastra()}>Cadastrar + relógios</Button>
                        </div>
                    }
            </Row>
        </Container>
    )
}