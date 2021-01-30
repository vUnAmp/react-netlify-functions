import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [url, setUrl] = useState('');

  useEffect(() => {
    handleOnClick();
  }, []);
  const handleOnClick = async () => {
    const data = await fetch(`/.netlify/functions/get-products`)
      // .then((response) => response.text())
      .then((contents) => contents.json())
      .catch((err) => {
        console.log(err);
      });
    console.log(data);
  };
  return (
    <div className="App">
      <header className="App-header">
        <p>{process.env.REACT_APP_HELLO}</p>
        {/* <button onClick={handleOnClick}>click</button> */}
      </header>
    </div>
  );
}

export default App;
