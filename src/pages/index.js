import React from 'react';

import styles from './index.module.css';
import Layout from '../components/Layout';

export default () => {
  return <>
    <Layout>
      <main className={styles.jumbotron}>
        <h1>Matt Gerton</h1>
        <h2>Full-stack developer with a focus and passion for front-end, usability, and product strategy.</h2>
      </main>
    </Layout>
  </>
};
