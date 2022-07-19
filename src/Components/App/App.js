import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'

import Row from 'react-bootstrap/Row'

import logo from '../../Images/logo.svg';
import './App.css';
import Header from '../Header/Header'
import AuthenticationForm from '../AuthenticationForm/AuthenticationForm'
import ImageList from '../ImageList/ImageList'
import ImageDetails from '../ImageDetails/ImageDetails'

function Main() {
  const items = useSelector((state) => state.menu.items)

  return (
    <React.Fragment>
      <main>
        <Routes>
          <Route element={(<ImageList />)} path="/" />
          <Route element={(<ImageDetails />)} path="/details" />
        </Routes>
      </main>
    </React.Fragment>
  )
}

function App() {
  const isFormOpen = useSelector((state) => state.authentication.isFormOpen)
  return (
    <div className="App">
      <Header />
      {
        isFormOpen && (
            <AuthenticationForm />
        )
      }
      <Main />
    </div>
  );
}

export default App;
