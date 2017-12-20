// Modules
import React from 'react';
import Radium from 'radium';

// Component styles
import styles from './styles';

const AppContainer = () => (
  <div style={styles.container}>
    <div style={styles.content}>
      Your code
    </div>
  </div>
);

export default Radium(AppContainer);
