import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { useDispatch, useSelector } from 'react-redux'

import icon from '../../Images/arrow-icon.svg';

import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { addUser } from '../../DataSource/State/authenticationSlice'

import './AuthenticationForm.css'

// This could be move to its own piece later
function AuthenticationForm() {
  
  const dispatch = useDispatch()
  const users = useSelector((state) => state.authentication.users)
  const activeUser = useSelector((state) => state.authentication.activeUser)
  const [name, setName] = useState('')
  return (
    <React.Fragment>
        <div id="authenticationContainer">
            {
                users.length > 0 && (
                    <Row xs={1} md={2} as="authenticationList" className="authenticationList">
                        <div>
                            Username
                        </div>
                        {
                            users.map((user) => {
                                return (<div className={activeUser == user ? "active": ""}>{user}</div>)
                            })
                        }
                    </Row>
                )
            }
            <Row as="authenticationForm" className="authenticationForm">
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Add username</Form.Label>
                        <Form.Control type="password" placeholder="" value={name} onChange={(event) => { setName(event.target.value) }}/>                
                    </Form.Group>
                    <a onClick={function () { dispatch(addUser(name))}}>
                        <img src={icon} />
                    </a>
                </Form>
            </Row>
        </div>
    </React.Fragment>
  )
}

export default AuthenticationForm;