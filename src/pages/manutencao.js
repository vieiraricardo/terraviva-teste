import React from 'react';

import SEO from '../components/seo';

export default function Home() {
  return (
    <main
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontFamily: "'helvetica', Arial, sans-serif",
        fontWeight: 'bold',
      }}
    >
      <SEO title="Inicio" />

      <h1 style={{ fontSize: '48px', textAlign: 'center' }}>
        Página em Manutenção
      </h1>
    </main>
  );
}
