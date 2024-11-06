import logo from './logo.svg';
import './App.css';
import data from './mokData'
import { useEffect, useState } from 'react';
import Card from './components/Card'
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Main from './pages/Main';
import Detail from './pages/Detail';
import About from './pages/About';
import styled from 'styled-components';
import axios from 'axios';
import Cart from './pages/Cart';


const Btn = styled.button`
  background: ${props=>props.background};
  color:${props =>props.backgrioun == 'red'? 'white:': 'black'}
  font-size: 25px;
  border: 1px solid black
`
const NewBtn = styled(Btn)`
  width: 200px;
  height:150px;
`

const Div = styled.div`
  background: skyblue;
  padding: 20px
`

function App() {
  
  const [fruit, setFruit] = useState(data);
  const [fruitCount,setFruitCount] = useState(3)
  
  useEffect(()=>{
    axios.get('https://raw.githubusercontent.com/Naessss/react_sample_data/main/fruit.json')
    .then((response)=>{
      setFruit([...response.data])
    })
    .catch((error)=>{
      console.log(error);
    })
  },[])


  return (
    <div className="App">
      
      <Header/>
      <Routes>
        <Route path='/' element={<Main fruit={fruit} fruitCount={fruitCount} setFruitCount={setFruitCount}/>}></Route>
        <Route path='/detail/:id' element={<Detail fruit={fruit}/>}></Route>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/about' element={<About />}>
          <Route path='intro' element={<h1>회사 소개</h1>} />
          <Route path='hist' element={<h1>연혁</h1>} />
          <Route path='loca' element={<h1>오시는 길</h1>} />
        </Route>

        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
      
    </div>
  );
}

export default App;