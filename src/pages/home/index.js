import React from 'react';
import './index.css';
import imgDownload from '../../assets/img/img_download.png'
import logo from '../../assets/img/B.png'
import {Navbar, Button, Form, Row} from 'react-bootstrap';

export default function Home() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">      
          <img alt="" src={logo} width="30" height="30" className="d-inline-block align-top"/>
        BarApp</Navbar.Brand>

          <Form inline className="ml-auto">
            <Button variant="outline-light" className="mr-sm-2">Login</Button>
            <Button variant="outline-success">Download App</Button>
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
    </>
  );
}
