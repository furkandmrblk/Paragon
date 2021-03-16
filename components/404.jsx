import React from 'react';
import Link from 'next/link';
import { ErrorButton, ErrorDiv, ErrorMessage, ErrorNumber } from './404S';

export const Error = () => {
  return (
    <ErrorDiv>
      <ErrorNumber>404</ErrorNumber>
      <ErrorMessage>Page Not Found</ErrorMessage>
      <Link href="/">
        <ErrorButton>Back To Homepage</ErrorButton>
      </Link>
    </ErrorDiv>
  );
};
