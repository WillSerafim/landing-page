/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-expressions */
import React, {useState, useEffect} from 'react';
import {Table, Container} from 'react-bootstrap';

import 'font-awesome/css/font-awesome.min.css';

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (localStorage.hasOwnProperty("users")) {
      setUsers(JSON.parse(localStorage.getItem("users")));
    }
  }, []);

  function deleteUser(position) {
    console.log(position);
  }

  return (
    <>
      <Container>
        <div className="mt-5">
          <Table striped bordered hover>
            <thead>
              <tr className="text-center">
                <th>Nome</th>
                <th>E-mail</th>
                <th>Barbeiro</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, i) => {
                return (
                  <tr key={i} className="text-center">
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.barber ? 'sim': 'não'}</td>
                    <td>
                      <a href="#">
                        <i className="fa fa-pencil text-dark mr-3" aria-hidden="true" style={{cursor: 'pointer'}}></i>
                      </a>
                      <a  href='#'>
                        <i className="fa fa-trash text-dark" aria-hidden="true" style={{cursor: 'pointer'}} onClick={deleteUser(i)}></i>
                      </a>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </Table>
        </div>
      </Container>
    </>
  )
}