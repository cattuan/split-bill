import React, { useEffect } from 'react';
import { Button } from '@zpi/button';
import logo from './logo.svg';
import styles from './app.module.scss';

function App() {

  useEffect(() => {
    // console.log('Button', Button);
  });

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <img src={logo} className={styles.logo} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button
          onClick={() => {
            window.location.href = "https://reactjs.org";
          }}
        >
          Learn React
        </Button>
      </header>
    </div>
  );
}

export default App;
