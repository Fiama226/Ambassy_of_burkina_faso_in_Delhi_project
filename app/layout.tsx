import '@mantine/core/styles.css';
import React from 'react';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { theme } from '../theme';
import {Template} from './Template'

export const metadata = {
  title: 'Ambassade du burkina faso a New delhi',
  description: "le site web de l'Ambassade du burkina faso a New delhi",
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en" suppressHydrationWarning >
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, initial-scale=1.0"
        />
      </head>
      <body>
        <MantineProvider theme={theme}>< Template children={children} /> </MantineProvider>
      </body>
    </html>
  );
}
