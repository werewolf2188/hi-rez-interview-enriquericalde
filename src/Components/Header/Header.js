import React from 'react'
import icon from '../../Images/account-icon.svg';
import { useDispatch } from 'react-redux'

import Row from 'react-bootstrap/Row'

import { changeFormState } from '../../DataSource/State/authenticationSlice'

import './Header.css'

// This could be move to its own piece later
function Header() {
  
  const dispatch = useDispatch()

  return (
    <React.Fragment>
      <Row as="header" className="head">
        <a onClick={function () { dispatch(changeFormState())}}>
          <img src={icon} />
        </a>
        <h2>
          {"Rate me"}
          
        </h2>
      </Row>
    </React.Fragment>
  )
}

export default Header;