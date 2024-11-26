
import '@mantine/core/styles.css';
import React from 'react';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { theme } from '../theme';
import {Template} from './Template'




export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en" suppressHydrationWarning  >
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content=" initial-scale=1, width=device-width"
        />
      </head>
      <body >
        <MantineProvider theme={theme}>< Template children={children} /> </MantineProvider>
      </body>
    </html>
  );
}
