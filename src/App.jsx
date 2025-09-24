import React, { Suspense } from 'react'
import './index.css'
import Nav from './components/Nav_components/Nav'
import Banner from './components/Banner_components/Banner'
import Footer from './components/Footer/Footer'
import Main from './components/Main_Section_components/Main'
import Spinner from './components/Spinner/Spinner'
const fetchPlayer = async () => {
  const res = await fetch('/tickets.json');
  return res.json();
}
const tickets = fetchPlayer(); 
const App = () => {
  return (
    <>
    <Nav></Nav>
    <Banner></Banner>
    <Suspense fallback={<Spinner></Spinner>}>
      <Main tickets={tickets}></Main>
    </Suspense>
    <Footer></Footer>
    </>
  )
}

export default App