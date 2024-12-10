import { useState } from 'react'
import './App.css'
import FormComponent from './component';
import LoginComponent from './component/login';
import SignUpComponent from './component/signUp';

function App() {
  return (
    <div>
      <h1>Welcome to React js</h1>
      {/* <FormComponent/> */}
      <div style={{display:'flex', gap:'300px'}}>
        <LoginComponent/>
        <SignUpComponent/>
      </div>
    </div>
  );
}

export default App
