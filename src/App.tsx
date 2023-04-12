import React from 'react';
import logo from './logo.svg';
import styles from './App.module.scss';

export function App(): React.ReactElement {
  return (
    <div className={styles.App}>
      <header className={styles.appHeader}>
        <img
          src={logo}
          className={styles.appLogo}
          alt="logo"
        />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className={styles.appLink}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
