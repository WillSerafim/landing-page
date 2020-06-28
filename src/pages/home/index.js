import React, {useState, useEffect} from 'react';
import {Navbar, Button, Form, Row, Modal, DropdownButton, Dropdown } from 'react-bootstrap';
import {useHistory} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import './index.css';
import imgDownload from '../../assets/img/img_download.png'
import logo from '../../assets/img/B.png'
// import ModalLogin from '.././../components/login/index';

export default function Home() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState(false);
  const history = useHistory();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    if (localStorage.hasOwnProperty("session")) {
      let dataUser = JSON.parse(localStorage.getItem("users"));
      let dataSession = JSON.parse(localStorage.getItem("session"));

      dataUser.forEach(element => {
        if (element['email'] === dataSession[0].email) {
          setName(element['name']);
        }
      });
    }
  }, []);

  function handleSubmit () {
    if (localStorage.hasOwnProperty("users")) {
      let data = JSON.parse(localStorage.getItem("users"));
      let name = '';
      let session = [];

      data.forEach(element => {
        if (element['email'] === email) {
          name = element['name'];
          handleClose();
        }
      });

      if (name !== '') {
        setName(name);
      }else {
        setError(true);
      }

      session.push({
        email: email
      });
  
      localStorage.setItem("session", JSON.stringify(session));
    } 
  }

  if (error) {
    toast.error('Usuário não cadastrado!');
    setError(false);
  }

  return (
    <>
      <ToastContainer />
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">      
          <img alt="" src={logo} width="30" height="30" className="d-inline-block align-top mr-2"/>
          Barber Agendamentos
        </Navbar.Brand>

          <Form inline className="ml-auto">
            
            {name !== "" ?
              <>
                <DropdownButton className="mr-2" variant="outline-light" id="dropdown-basic-button" title="Actions">
                  <Dropdown.Item onClick={() => history.push('/users')}>List users</Dropdown.Item>
                  <Dropdown.Item onClick={() => history.push('/new-user')}>Add users</Dropdown.Item>
                  <Dropdown.Divider/>
                  <Dropdown.Item href="/" onClick={() => localStorage.removeItem('session')}>logout</Dropdown.Item>
                </DropdownButton>

                <Navbar.Text>
                  Logado como: {name}
                </Navbar.Text>
              </>
            : 
              <>
                <Button variant="outline-light" className="mr-sm-2" onClick={handleShow}>Login</Button>
                <Button variant="outline-light" className="mr-sm-2" href="/new-user">Cadastrar</Button>
              </>
            }
          </Form>
      </Navbar>

      <div id="bg-img">
        <h1 id="title" className="text-center font-weight-light">Conheça os serviços do nosso aplicativo!</h1>

          <img className="rounded mx-auto d-block mt-5" src={imgDownload} alt="" width="300px"/>
      </div>

      <div>
        <h1 className="text-center font-weight-light mt-3">Funcionalidades</h1>

        <div className="col-12">
          <Row>
            <div className="text-center font-weight-light  col-6">
              <h3>Agendamentos</h3>
              <p>Seu cliente pode realizar o agendamento a <br/> qualquer horário do dia com apenas 1 click!</p>
            </div>

            <div className="text-center font-weight-light col-6">
              <h3>Controle total da agenda</h3>
              <p>Visualize de forma rápida e eficiente sua fila de agendamentos.</p>
            </div>

            <div className="text-center font-weight-light col-6">
              <h3>Mensalidade</h3>
              <p>Mensalidades acessíveis para seu bolso, com cadastro ilimitado de usuários.</p>
            </div>

            <div className="text-center font-weight-light col-6">
              <h3>App</h3>
              <p>Um app totalmente customizável para o seu negócio <br/> disponível para Android e IOS .</p>
            </div>
          </Row>
        </div>

      </div>
      
      <Navbar strick="bottom" bg="dark"/>

      {/* <ModalLogin {...props}/> */}

      <Modal  size="sm" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
              <Form.Group controlId="email">
                <Form.Label>E-mail</Form.Label>
                <Form.Control type="email"  onChange={e => setEmail(e.target.value)}/>
              </Form.Group>

              <Form.Group controlId="password">
                <Form.Label>Senha</Form.Label>
                <Form.Control type="password"/>
              </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleSubmit}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
