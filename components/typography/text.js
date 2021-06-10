import React from 'react';
import { Typography } from './Typography';

export function Content({ children }) {
  return <Typography element="p" variant="content" content={children} />;
}
