import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
import Button from "./components/Button"
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <Header />
      <Button />
    </div>
  );
}

export default App;