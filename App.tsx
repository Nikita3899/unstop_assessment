import React from 'react';
import styles from './app.module.scss';
import './styles/style.css'
import RootContainer from './components/RootContainer';

function App() {
  return (
    <div className={styles["main-container"]}>
     
     <RootContainer/>
    </div>
  );
}

export default App;
