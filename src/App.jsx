import React, { Suspense, useState } from 'react'
import './index.css'
import Nav from './components/Nav_components/Nav'
import Banner from './components/Banner_components/Banner'
import Footer from './components/Footer/Footer'
import Main from './components/Main_Section_components/Main'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import Spinner from './components/Spinner/Spinner'
const fetchPlayer = async () => {
  const res = await fetch('/tickets.json');
  return res.json();
}
const tickets = fetchPlayer(); 
const App = () => {
  const [resolvedTasks, setResolvedTasks] = useState([]);
  const [resolvedCount, setResolvedCount] = useState(0); 
  const [taskStatus, setTaskStatus] = useState([]);
  const [progress,setProgress] = useState(0);
  return (
    <>
    <Nav ></Nav>
    <Banner progress = {progress} resolvedCount={resolvedCount}></Banner>
    <Suspense fallback={<Spinner></Spinner>}>
      <Main taskStatus={taskStatus} 
         resolvedTasks={resolvedTasks}        
          setResolvedTasks={setResolvedTasks} 
      resolvedCount={resolvedCount}       
          setResolvedCount={setResolvedCount} setTaskStatus={setTaskStatus} setProgress={setProgress} tickets={tickets}></Main>
    </Suspense>
    <Footer></Footer>
      <ToastContainer position="top-right" autoClose={2000} hideProgressBar={false} />
    </>
  )
}

export default App