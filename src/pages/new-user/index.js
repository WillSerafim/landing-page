/* eslint-disable no-unused-expressions */
import React, {useState} from 'react';
import {Container, Form, Card, Button} from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import {useHistory} from 'react-router-dom';

export default function NewUser() {
  const [name , setName] = useState("");
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");
  const [barber , setBarber] = useState(false);
  const history = useHistory();

  const onSubmit = () => {
    let data = [];

    if (localStorage.hasOwnProperty("users")) {
      data = JSON.parse(localStorage.getItem("users"));
      
      data.push({
        name: name,
        email: email,
        password: password,
        barber: barber
      });

      localStorage.setItem("users", JSON.stringify(data));
      
      toast.success('Usuário cadastrado com sucesso!');
    } else {
      data.push({
        name: name,
        email: email,
        password: password,
        barber: barber
      });

      localStorage.setItem("users", JSON.stringify(data));

      toast.success('Usuário cadastrado com sucesso!');
    }

  }

  return (
    <>
      <ToastContainer />
      <Container>
        <div className="mt-5 mx-auto" style={{width: '50%'}}>
          <Button variant="light" className="mb-5" onClick={() => history.push('/')}>
            <i className="fa fa-arrow-left text-dark" aria-hidden="true"></i>
          </Button>
          <Card bg="Light">
            <Card.Header>Cadastro de usuário</Card.Header>
            <Card.Body>
              <Form onSubmit={onSubmit}>
                <Form.Group controlId="name">
                  <Form.Label>Nome</Form.Label>
                  <Form.Control type="text" name="name" value={name} onChange={ e => setName(e.target.value)} required/>
                </Form.Group>

                <Form.Group controlId="email">
                  <Form.Label>E-mail</Form.Label>
                  <Form.Control type="email" name="email" value={email} onChange={ e => setEmail(e.target.value)}/>
                </Form.Group>

                <Form.Group controlId="password">
                  <Form.Label>Senha</Form.Label>
                  <Form.Control type="password" name="password" value={password} onChange={ e => setPassword(e.target.value)}/>
                </Form.Group>

                <Form.Group controlId="checkbox">
                  <Form.Check type="checkbox" label="Barbeiro" name="barber" value={barber} onChange={ e => setBarber(true)}/>
                </Form.Group>

                <Button variant="success" type="submit">
                  Salvar
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </>
  )
}