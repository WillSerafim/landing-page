/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-expressions */
import React, {useState, useEffect} from 'react';
import {Table, Container, Button} from 'react-bootstrap';
import {useHistory } from 'react-router-dom';

export default function Users() {
  const [users, setUsers] = useState([]);
  const history = useHistory();

  useEffect(() => {
    if (localStorage.hasOwnProperty("users")) {
      setUsers(JSON.parse(localStorage.getItem("users")));
    }
  }, []);

  function deleteUser(position) {
     const data = users.filter((user, i) => {
      return i !== position;
    });
    
    setUsers(data);
    localStorage.setItem("users", JSON.stringify(data));
  }

  function updateUser(position) {
    history.push('/new-user', position);
 }

  return (
    <>
      <Container>
        <div className="mt-5">
          <Button variant="light" className="mb-5" onClick={() => history.push('/')}>
            <i className="fa fa-arrow-left text-dark" aria-hidden="true"></i>
          </Button>
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
                      <a onClick={() => updateUser(i)}>
                        <i className="fa fa-pencil text-dark mr-3" aria-hidden="true" style={{cursor: 'pointer'}}></i>
                      </a>
                      <a  onClick={() => deleteUser(i)} >
                        <i className="fa fa-trash text-dark" aria-hidden="true" style={{cursor: 'pointer'}} ></i>
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