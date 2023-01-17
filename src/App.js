import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import QuestionPage from './pages/QuestionPage';
import PreviewComponent from './component/right/PreviewComponent';
import { StateProvider } from './contextApi/context';
import reducer, { initialState } from './contextApi/reducer';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Test from './pages/Test';

function App() {

  

  return (
    <StateProvider initialState={initialState} reducer={reducer}>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<QuestionPage/>}/>
        <Route path='/test' element={<Test/>}/>
      </Routes>
      </BrowserRouter>

    </StateProvider>
  );
}

export default App;
