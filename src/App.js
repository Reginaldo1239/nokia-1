import React from 'react';
import logo from './logo.svg';
import './App.css';
import Display from './componentes/display';
import Button from './componentes/button';
function App() {
  return (
    <>
   <Display title="123"></Display>
   <Button number="1" letters="abc"></Button>
   <Button number="2" letters="def"></Button>
   <Button number="2" letters="ghi"></Button>
   <Button number="2" letters="jkl"></Button>
   <Button number="2" letters="mno"></Button>
   <Button number="2" letters="pqrs"></Button>
   <Button number="2" letters="tuv"></Button>
   <Button number="2" letters="wxyz"></Button>
   </>

  );
}

export default App; 
