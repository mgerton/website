import React from 'react';
import { Title, PageHeading, SectionHeading } from './headings';
import styles from './Typography.module.css';

export function Typography({ element, variant, content }) {
  return React.createElement(element, { className: styles[variant] }, content);
}

export { Title, PageHeading, SectionHeading };
