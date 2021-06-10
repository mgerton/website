import React from 'react';
import styles from './Button.module.css';

export function Button({ children, href, variant='primary' }) {
  if (href) {
    return <a href={href} className={styles[variant]}>
      {children}
    </a>;
  }

  return <button className={styles[variant]}>
    {children}
  </button>;
}
