import { Metadata } from 'next';
import '@mantine/core/styles.css';
import React from 'react';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { theme } from '../theme';
import {Template} from './Template'

export const metadata: Metadata = {
  title: 'Ambassade du Burkina faso a Delhi',
  description: "Le site web officiel de l'ambassade du Burkina faso a Delhi",
  openGraph: {
    title: 'Ambassade du Burkina faso a Delhi',
    description: "Le site web officiel de l'ambassade du Burkina faso a Delhi",
    images: ['/burkina_faso_armorial.png'],
  },
};


export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en" suppressHydrationWarning  >
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/burkina_faso_armorial.png" />
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
