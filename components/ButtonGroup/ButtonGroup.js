import React, { Children, cloneElement } from 'react';
import styles from './ButtonGroup.module.css';

export function ButtonGroup({ children }) {
  // const buttons = Children.map(children, button =>
  //   cloneElement(button);
  // );

  return <div className={styles.ButtonGroup}>
    {children}
  </div>;
}
