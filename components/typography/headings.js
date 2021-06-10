import React from 'react';
import { Typography } from './Typography';

export function Title({ children }) {
  return <Typography element="h1" variant="title" content={children} />;
}

export function PageHeading({ children }) {
  return <Typography element="h1" variant="h1" content={children} />;
}

export function SectionHeading({ children }) {
  return <Typography element="h2" variant="h2" content={children} />;
}
